import { useState } from "react"



export const CounterApp = () => {

    //use state ahora es un objeto
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    //desestructuramos la variable state con sus valores
    const { counter1, counter2, counter3 } = state;

    return (
        <>
            {/* imprimimos los valores de state */}
            <h1>Counter: { counter1 }</h1>
            <h1>Counter: { counter2 }</h1>
            <h1>Counter: { counter3 }</h1>

            <hr />
            <button className="btn" 
                    onClick={ 
                        () => setCounter({
                            // setCounter dara nuevo valor a las variables de state
                            // usamos spread para los otros valores ...state,
                            ...state,
                            //damos valor a counter1 
                            counter1: counter1 + 1,
                        }) 
                    }>+1</button>

        </>
    )
}

