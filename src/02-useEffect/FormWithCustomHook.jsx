import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password  } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

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
    }, [formState]);//sólo se dispara cuando hay un cambio en el formualrio por que se dispone así en el arreglo
    //en este caso es el setFroState (el hook)

    useEffect(() => {
        // console.log('useEffect mail changed');
    }, [email]);// ahora con el email






    return (
        <>
            <h1>Formulario con custom hook</h1>
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

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}

