import {useState} from "react";

function NameSurname() {
    const [nameSurname, setNameSurname] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    return (    
       
        <div className="w-96 mx-auto mt-10 bg-gray-300 p-2">
            <div className="bg-gray-500 p-2">
                <div className="text-white text-center rounded-2xl ">
                    {nameSurname!=="" ? nameSurname : "Introduce nombre y apellidos"}
                </div>
                <form> 
                    <input
                        name = "name"
                        autoFocus={true}
                        type="text"
                        className="block h-11 w-full rounded-2xl mb-2 p-2"
                        placeholder="Nombre" 
                        value={name}
                        onChange={e => {
                            setName(e.target.value)
                            setNameSurname(e.target.value + " " + surname)
                        }}
                    />
                    <input
                        name = "surname"
                        type="text"
                        className="block h-11 w-full rounded-2xl mb-2 p-2"
                        placeholder="Apellidos" 
                        value={surname}
                        onChange={e => {
                            setSurname(e.target.value)
                            setNameSurname(name + " " + e.target.value)
                        }}
                    />
                </form>
            </div>
        </div>
    )
}

export default NameSurname