import { useEffect, useReducer } from "react"
import { todoReducer } from "./TodoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // }
]
// esto dice que guardará en local storage la persistencia del objeto
// al final de la linea || [] indica que si está vacio, devolverá vacio para 
// evitar el null
const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );
    // guarda en el local storage
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return (
        <>
            <h1>TodoApp: 10 <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo ={  handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />                    
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>

            </div>


        </>
    )
}
