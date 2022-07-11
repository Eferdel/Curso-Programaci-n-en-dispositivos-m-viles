'use strict'; //¿activado por defecto?
/**
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode
 * Cambia la sintaxis en tiempo de ejecución:
 * - Convierte equivocaciones en errores (JS fue concebido de manera muy felxible para aprender a programar, ciertas sintaxis da problemas, listas mal definidas)
 * - Simplificación en el uso de variables, no se puede usar una variable si no está previamente bien declarada
 * - Cambios en eval y arguments
*/

import fetch from "node-fetch"


import aws_credentials from "./config/aws_credentials.js"

/**
 * DATA TYPES
 *
 * Null
 * Undefined <primitive>
 * Number <primitive>
 * String <primitive>
 * Boolean <primitive>
 * Object
 * Array
 * Function
 */


console.log("\n") // Salto de línea
console.log("---------------DATA TYPES-------------------")

const nullData = null //const son datos guardados en la memoría
console.log(typeof nullData === "object")

const undefinedData = undefined
console.log(typeof undefinedData === "undefined")

const age = 41
console.log(typeof age === "number")

const name = "Israel Parra"
console.log(typeof name === "string")

const subscribed = false
console.log(typeof subscribed === "boolean")

const userObject = {}
console.log(typeof userObject === "object")

const userList = []
console.log(Array.isArray(userList))

const showUserName = () => {}
console.log(typeof showUserName === "function")

/**
 * CONSTANTES
 * - Definimos constantes, en mayúscula separada por _
 */
 console.log("\n")
 console.log("---------------CONST-------------------")
 
 const API_URL = "https://miapi.com"
 console.log(API_URL)

 /**
 La siguiente línea da un error, por eso está comentadad
 No se puede redefinir una constante
 */
//API_URL = "https://otraapi.com" 

/**
 * LET
 * - Definimos variables que podmeos ir modificando (antes se usaba var)
 */
 console.log("\n")
 console.log("---------------LET-------------------")
 let counter = 0
 console.log(counter)
 counter++
 console.log(counter)
 counter++
 console.log(counter)
 counter--
 console.log(counter)

 /**
 * FUNCTIONS
 * - Definimos una función con una expresion lamda
 * - Para llamar a la función hemos de nombrarla
 * - La diferencia entre printCounter y Sum es el return
 */
console.log("\n")
console.log("---------------FUNCTIONS-------------------")
const printCounter = () => {
    let counter = 10
    console.log("COUNTER: " + counter)
}
printCounter()

const sum = (a, b) => {
    return a + b
}

console.log(sum(10, 5))


/**
 * OBJECTS
 * - Si definimos un objeto (user) como una constante, no podemos definir el objeto de nuevo
 * pero si podemos cambiar sus propiedades (user.name) o  añadir nuevas (user.skills)
 * - Podemos reasingar completamente el objeto definiendo user como un let en vez de const.
 */
 console.log("\n")
 console.log("---------------OBJECTS-------------------")
 const user = {
     name: "Israe",
     surname: "Parra",
     age: 41,
     birthdate: new Date(
         1981, 2, 31, 10, 0, 0
     ),
  }
 console.log(user)
 
 user.skills = "Php, Javascript and more..."
 console.log(user)
 user.name = "Israel"
 console.log(user)

 /**
  let user = {
     name: "Israe",
     surname: "Parra",
     age: 41,
     birthdate: new Date(
         1981, 2, 31, 10, 0, 0
     ),
  }
 user = null
 console.log(user)

 */

 /**
 * ARRAYS
 * - Con push, añadimos datos dentro de users.
 * - Con isarray() comprobas si lo de dentro del paréntesis es un array
 */
console.log("\n")
console.log("---------------ARRAYS-------------------")
const users = ["foo", "bar", "foobar"]
console.log(users)
users.push("barfoo")
console.log(users)

const userObjects = [
    {id: 1, name: "foo"},
    {id: 2, name: "bar"},
    {id: 3, name: "foobar"},
    {id: 4, name: "barfoo"},
]
console.log(userObjects)

/**
 * LOOPS
 * - Foreach, itera el array, se asigan un nombre cualquier a los valores (z, user)
 * - map, similar a forEach()
 * - Con "for" definimos las llaves (key) y accedemos a cada posición (user)
 * El bucle While tiene la estrucutra:
 * while("condición"){acciones}
 */
 console.log("\n")
 console.log("---------------LOOPS-------------------")

 users.forEach(z => console.log(z))
 users.forEach(user => console.log(user))
 
 for (let key in userObjects) {
  //  * user puede ser una constante o un let, usar const aquí rompe la idea de constante
  // por tanto, preferiría usar let.
     const user = userObjects[key]
     console.log(user)
 }
 
 users.map(user => console.log(user))

 for(let i=0;i<5;i++){
  console.log(i)
 }

/**
 * CONDITIONALS
 * Mas adelante esta estructura se modificará por un operador ternario ---?---:---
 */
 console.log("\n")
 console.log("---------------CONDITIONALS-------------------")
 const userAge = 70
 if (userAge < 18) {
     console.log("eres menor de edad")
 } else if(userAge >= 18 && userAge < 65) {
     console.log("eres mayor de edad y estás en activo")
 } else {
     console.log("estás jubilado")
 }

 /**
 * CLASSES
 */
console.log("\n")
console.log("---------------CLASSES-------------------")
class Game {
    playerName;
    lives;
    gameStarted = false;

    constructor(playerName, lives = null) {
        this.playerName = playerName
        this.lives = lives
    }

    startGame() {
        this.gameStarted = true
    }
}

const gameFoo = new Game("Foo", 3)
console.log(gameFoo)

const gameBar = new Game("Bar", 5)
gameBar.startGame()
console.log(gameBar)
 
 /**
 * ASYNC/AWAIT
 * Para poder hacer peticiones http usamos la librería node-fetch
 * Para instalarla, escribimos en terminal 
 * npm install node-fetch --save
 * npm install permite instalar todas las librerías de un proyecto clonado de github
 * de esta forma, solo es necesario compartir el archivo package.json
 * 
 * Originalmente las peticiones se hacian con la siguiente estructura
 * peticion
 *  .then (()=>{})
 *  .catch((error)=>{})
 *  .finally(()=>{})
 * Se pasaron por las promesas (xhttpRequest) y ahora se usa await/async (permite usar try/catch/finally más sencillos)
 * En caso de que no sea un proyecto que use view, react o angular, es necesario definir en package.json "type":"module"
 * fetch (en la línea después del try) es lo que nos permite recoger los datos de la url
 * para poder usar fetch es necesario haber incoporado a nuestro proyecto node-fetch.js (está en package.json)
 * Podemos incluir fetch en nuestro archivo purebas.js usando import fetch from "node-fetch"
 * 
 */
console.log("\n")
console.log("---------------ASYNC/AWAIT-------------------")
const fetchUsers = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await data.json()
        console.log(json)
    } catch (error) {
        console.error("Ha ocurrido un error")
        console.error(error)
    } finally {
        console.log("La petición ha finalizado")
    }
}

await fetchUsers()

/**
 * IMPORT FILES
 * Sirven para archivos de configuración, de parámetros, de credenciales, etc.
 * 
 * Para importar un archivo usamos la sentencia "import aws_credentials from "./config/aws_credentials.js"
 * El nombre detrás de import no tiene porque coincidir con el nombre del archivo
 * 
 * El archivo aws_credentials exporta por defecto todos los valores que contiene
 * 
 * Podemos importar solo determinadas variables o datos de un archivo:
 * Para ello, el archivo que importamos tendrá una estrucutra similar a esta:
 * const credentials = {
 * 
 * }
 * const config = {
 * 
 * }
 * export { 
 *  credentials, config
 *  //también podríamos exportar una sola de ambas.
 * }
 * 
 * En el import de este archivo, esribiríamos
 * import {credentials, config} from "./config/aws_credentials.js
 * Aquí los nombre si deben coincidir
 */
 console.log("\n")
 console.log("---------------IMPORT FILES-------------------")
 console.log(aws_credentials)
 

 /**
 * SPREAD
 * El spread son tres puntos ... que se usan en los iterables (arrays y objetos)
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * Permiten trabajar con ellos de manera mucho mas cómoda y versátil
 * Ejemplos:
1.-
 var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
// ["head", "shoulders", "knees", "and", "toes"]

2.-
function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);

El ejemplo propuesto funciona tanto con ... como sin él, la diferencia es cómo se trabaja con él
Si paso solo words (sin los tres puntos) la función usa ... para constuir un array de words

 */
console.log("\n")
console.log("---------------SPREAD-------------------")
const sentencesBuilder = (...words) => {
    console.log(words)
    console.log(words.join(" "))
}
const words = ["Hola", "esto", "es", "una", "frase"]
sentencesBuilder(...words)

/**
 * ARGUMENTS
 * En JS, los argumentos de una función se almacenan en el array "arguments" si la definimos así:
 * La diferencia está en el operador flecha, no se debe usar, ya que la cabecera estaría mal definida
*/
 console.log("\n")
 console.log("---------------ARGUMENTS-------------------")
 function userBuilder () {
     return {
         name: arguments[0],
         surname: arguments[1],
         age: arguments[2]
     }
 }
 
 const newUser = userBuilder(
     "Israel", "Parra", 41
 )
 console.log(newUser)
 