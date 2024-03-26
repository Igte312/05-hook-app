import { useState } from "react";

 
export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState, // se mantienen todos los valores de formulario
            [name]: value, //propiedades computadas de los objetos 
            //(propiedad name se establecerá en el objeto y el valor será = al nuevo value)
        });
    }

    // regresa el formulario a su estado original
    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
