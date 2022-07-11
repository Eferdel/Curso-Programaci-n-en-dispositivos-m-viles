"use strict";

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
console.log("\n")
console.log("---------------DATA TYPES-------------------")

const nullData = null
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
 * CONST
 */
console.log("\n")
console.log("---------------CONST-------------------")

const API_URL = "https://miapi.com"
console.log(API_URL)

/**
 * LET
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
 */
console.log("\n")
console.log("---------------OBJECTS-------------------")
let user = {
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
user = null
console.log(user)


/**
 * ARRAYS
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
 */
console.log("\n")
console.log("---------------LOOPS-------------------")
users.forEach(user => console.log(user))

for (let key in userObjects) {
    const user = userObjects[key]
    console.log(user)
}
users.map(user => console.log(user))


/**
 * CONDITIONALS
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
 */
console.log("\n")
console.log("---------------IMPORT FILES-------------------")
console.log(aws_credentials)


/**
 * SPREAD
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













