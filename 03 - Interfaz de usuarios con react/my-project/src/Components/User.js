import { useState } from "react"; 
/**User: tarjeta para mostar información del usuario y que sea dinámica
* Vamos a usar props <- Pasar datos a un componente
*/
function User({name, age, skills}){
    return(
        <div>
            <h1 className="text-3xl font-bold underline mt-10">Tarjeta de usuario</h1>
            <div className="items-center justify-between space-x-5 mx-auto">
                <div className="items-start space-x-5">
                    <div className="pt-1.5">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {name}({age} años)
                        </h2>
                        <p className="text-sm font-medium text.gray-500">{skills}</p>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default User