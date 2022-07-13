import {useState} from "react";

function EmptyTodoList() {
    return (
        <div className="bg-red-400 text-white text-center rounded-2xl p-3">
            Todavía no has creado ninguna tarea...
        </div>
    )
}

// Crear un formulario con REACT

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("")

    //Manejador del evento del formulario
    const handleSubmit = (e) => {
        e.preventDefault() // parado el evento por defecto del formulario (redireccionar a otra página)
        if (!value) return
        console.log (value)
        addTodo(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}> {/*llamamos a handleSubmit, no hace falta pasar "e" ya que javascript lo captura automática al enviar el formulario */}
            <input
                autoFocus={true}
                type="text"
                className="block w-full rounded mb-2"
                placeholder="¿Tienes una nueva tarea?" /* texto que se añade al fondo de la caja*/
                value={value}
                onChange={e => setValue(e.target.value)} /*e: evento, event.target, evento del formulario */
            />
        </form>
    )
}

function Todo({ todo, index, completeTodo, removeTodo }) {
    let todoClassName = "flex mb-1 text-sm py-3 px-2 bg-blue-500 text-white rounded"
    if (todo.isCompleted) {
        todoClassName += " line-through"
    }

    return (
        <>
            <div className={todoClassName}>
                {todo.text}
            </div>
            <div className="relative float-right -mt-10 mr-2">
                <button
                    className="btn rounded-2xl bg-gray-300 text-black p-1 text-xs"
                    onClick={() => completeTodo(index)}
                >
                    Completar
                </button>

                <button
                    className="btn rounded-2xl bg-red-300 text-black p-1 text-xs"
                    onClick={() => removeTodo(index)}
                >
                    Eliminar
                </button>
            </div>
        </>
    )
}
// En React, la responsabilidad recae sobre el padre, por eso, todas las funciones están aquí
function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = text => {
        const newTodos = [...todos, { text }]
        setTodos(newTodos)
    }

    const completeTodo = index => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = true
        setTodos(newTodos)
    }

    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div className="w-96 mx-auto mt-10 bg-gray-300 p-2">
            <div className="bg-gray-500 p-2">
                <TodoForm addTodo={addTodo}/>
                {/* Operador ternario: (Condición ? primera opción : segunda opción) */}
                {todos.length > 0 ?
                    (todos.map((todo, index) => (
                        <Todo
                            key={index}
                            index={index}
                            todo={todo}
                            completeTodo={() => completeTodo(index)}
                            removeTodo={() => removeTodo(index)}
                        />
                    )))
                    : <EmptyTodoList />
                }
            </div>
        </div>
    )
}

export default TodoList