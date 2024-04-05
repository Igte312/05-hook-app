
export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add todo':
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            //firter regresa un nuevo arreglo
            // regresa todos los todos siempre y cuando el id sea diferente
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            return initialState.map(  todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

        default:
            return initialState;
    }

}