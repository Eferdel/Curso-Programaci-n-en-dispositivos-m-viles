import {useState} from "react";

function EmptyNameSurname() {
    return (
        <div className="text-white text-center rounded-2xl ">
            Introduce nombre y apellidos
        </div>
    )
}

function FullNameSurname({nameSurname}) {
    return (
        <div className="text-white text-center rounded-2xl ">
            {nameSurname}
        </div>
    )
}

function NameSurnameForm({ insertNameSurname }) {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    const handleSubmit = (e) => {
        console.log("A")
        e.preventDefault() 
        console.log("B")
        if (!name || !surname) return
        insertNameSurname(name + " "+ surname)
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input
                name = "name"
                autoFocus={true}
                type="text"
                className="block h-11 w-full rounded-2xl mb-2 p-2"
                placeholder="Nombre" 
                value={name}
                onChange={e => setName(e.target.value)} 
            />
            <input
                name = "surname"
                type="text"
                className="block h-11 w-full rounded-2xl mb-2 p-2"
                placeholder="Apellidos" 
                value={surname}
                onChange={e => setSurname(e.target.value)} 
            />
            <input
                type = "submit"
                hidden = "hidden"
            />
        </form>
    )
}

function NameSurname() {
    const [nameSurname, setNameSurname] = useState("")

    const insertNameSurname = text => {
        const newNameSurname = text
        setNameSurname(newNameSurname)
    }

    return (    
        <div className="w-96 mx-auto mt-10 bg-gray-300 p-2">
            <div className="bg-gray-500 p-2">
                {nameSurname!=="" ? 
                    <FullNameSurname 
                        nameSurname = {nameSurname}
                    />
                    : <EmptyNameSurname />
                }
                <NameSurnameForm insertNameSurname = {insertNameSurname}/>
            </div>
        </div>
    )
}

export default NameSurname