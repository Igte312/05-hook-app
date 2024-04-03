import { useMemo, useState } from "react";
import { useCounter } from "../hooks"


const heavyStuff = ( interationNumber = 100 ) =>{
    for( let i = 0; i < interationNumber; i++){
        console.log('Ahí vamos...');
    }

    return `${ interationNumber } interaciones realizadas`
} 

export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    //para que no se vuelva a generar
    const [show, setShow] = useState(true);
    //en este caso el useMemo memoriza un valor
    // tiene un snippet pero generalmente no se usa y se usa aux de una variable
    //useMemo(() => first, [second])
    //quiere decir que no se volverá a ejecutar
    //se usa para cargas pesadas
    const memorizedValue = useMemo(() => heavyStuff( counter ), [counter]);

    return (
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />

            <h4>{ heavyStuff ( counter )}</h4>

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1 
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show )}
            >
                Show/hide { JSON.stringify(show) }
            </button>
        </>
    )
}
