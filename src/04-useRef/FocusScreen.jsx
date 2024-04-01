import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = () => {

        //usaremos hook useRef --> se encargará de hacer el querySelector
        //nos permite hacer una referencia para que no se dispare nuevamente
        // lo usuamos en la renderización del input (ver linea 22)
        console.log(inputRef);
        inputRef.current.select();
        //document.querySelector('input').select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={ inputRef }
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />
            
            <button
                className="btn btn-primary mt-2"
                onClick={onClick}
            >
                Set focus

            </button>
        </>

    )
}
