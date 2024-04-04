
// sirve para manejar estados más complejos que el useState
const initialState = [{
    id: 1,
    todo: 'Recolecatr la piedra del alma',
    done: false,
}];


const todoReducer = ( state = initialState, action = {} ) =>{

    if (action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolecatr la piedra del poder',
    done: false,
}

const addtodoaction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addtodoaction);


console.log({state: todos});