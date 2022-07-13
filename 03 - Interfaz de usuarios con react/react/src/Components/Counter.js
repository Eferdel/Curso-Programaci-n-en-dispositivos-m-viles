import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className="text-3xl font-bold underline mb-2">
                Contador con React
            </h1>

            <button
                className="btn bg-orange-300 text-white font-bold py-2 px-4 rounded"
                onClick={() => setCount(count + 1)}
            >
                Incrementar
            </button>

            <p>Contador actual: {count}</p>

            <button
                className="btn bg-blue-300 text-white font-bold py-2 px-4 rounded"
                onClick={() => setCount(count - 1)}
            >
                Decrementar
            </button>
        </>
    )
}

export default Counter
