import { useState } from"react"; 
//useState es un hook que nos permite gestionar el modelo de datos de React, conservar valores entre renderizados. https://es.reactjs.org/docs/hooks-overview.html
// los hooks son sustitutos de las clases en React https://es.reactjs.org/docs/hooks-faq.html
// El usarlos es porque: https://es.reactjs.org/docs/hooks-intro.html#motivation
// los componentes se escriben con mayúsucla, no es una función al uso
function Counter(){
    //Si quiero guardar algo lo, tengo que usar hooks
    const[count, setCount]=useState(0)
    // Vamos a dotar de estilo a h1, ya que react sobreescribe las propiedades html para ajustarlas a index.css y app.css
    // no podemos usar class por este motivo, usamos className
    // class es una palabra reservada en JS y REACT, al interpretarla, da problemas.
    // return <h1 className="text-4xl font-bold">Hola</h1>
   return(
    <div>
        <h1 className="text-3xl font-bold underline mb-2">
            Contador con React
        </h1>
        <button
            className="btn bg-orange-300 text-white font-bold py-2 px-4 rounded"
            onClick={()=>setCount(count+1)}
            >
                Incrementar
            </button>

            <p> Contador actual: {count} </p>

        <button
            className="btn bg-blue-300 text-white font-bold py-2 px-4 rounded"
            onClick={()=>setCount(count-1)}
            >
                Decrementar
            </button>
    </div>
   )
}

export default Counter