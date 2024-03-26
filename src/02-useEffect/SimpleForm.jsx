import { useState, useEffect } from "react"
import { MessageM } from "./MessageM";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState, // se mantienen todos los valores de formulario
            [name]: value, //propiedades computadas de los objetos 
            //(propiedad name se establecerá en el objeto y el valor será = al nuevo value)
        })
    }

    // useEffect se importa y se usa para disparar efectos secundarios
    // va a recibir una fn como argumento
    // cada vez que se cambie el estado, se llamará a useEffect
    // se llamará cada vez que simpleForm se dibuje por alguna razón
    useEffect(() => {
        // console.log('useEffect called');
    }, []);//no se recomienda usuarlo sin una segunda dependencia
    //esto es para que solo se dispare una vez


    useEffect(() => {
        // console.log('useEffect formStateChange');
    }, [setFormState]);//sólo se dispara cuando hay un cambio en el formualrio por que se dispone así en el arreglo
    //en este caso es el setFroState (el hook)

    useEffect(() => {
        // console.log('useEffect mail changed');
    }, [ email ]);// ahora con el email

    
    

    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}

            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={email}
                onChange={onInputChange}

            />
            {/* {   // si usuario === nombre, entonces, mensaje */}
            {
                (username === 'strider2' ) && <MessageM />
            }
        </>
    )
}

