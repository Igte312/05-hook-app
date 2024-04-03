import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {

    const [counter, setCounter] = useState( 10 );
    // a diferencia de memo que memoriza valores y componentes,
    // useCallback memoriza funciones
    const incrementFather = useCallback(
      () => {
        setCounter( (value) => value + 1 );
      },
      [],
    )
    

    // const incrementFather = () => {
    //     setCounter( counter + 1);
    // }

    return (
        <>
            <h1>useCallBack hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ incrementFather }/>

        </>
    )
}
