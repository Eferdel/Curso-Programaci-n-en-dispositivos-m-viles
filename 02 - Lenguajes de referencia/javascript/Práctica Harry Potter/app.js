/**
 * ENUNCIADO
 * Con los conocimientos adquiridos en esta sección, deberías poder desarrollar el siguiente script basado en la saga de Harry Potter.

    Un script que realice una petición HTTP a la URL http://hp-api.herokuapp.com/api/characters/students para obtener todos los estudiantes.
    Recorrer todos los estudiantes y mostrarlos en la consola, para ello deberás utilizar un bucle.
    Sólo necesitamos mostrar los que pertenezcan a una casa (propiedad house del objeto). Si no tienen casa los descartamos.

Para poder revisar este ejercicio una vez lo hayas finalizado, simplemente comprime tu proyecto y adjúntalo.
 */

'use strict'; 
import fetch from "node-fetch"
/**
 * PETICIÓN de DATOS
 */
const fetchStudentsInHouse = async () => {
    try {
        //
        const data = await fetch('http://hp-api.herokuapp.com/api/characters/students')
        const json = await data.json()
        for(let key in json){
        //Mostramos aquellos estudiantes que pertenencen a una casa
            if (json[key]["house"]!=''){
                console.log(json[key]["name"])
            }
        }
    } catch (error) {
        console.error("Ha ocurrido un error")
        console.error(error)
    } finally {
        console.log("La petición ha finalizado")
    }
}

await fetchStudentsInHouse()