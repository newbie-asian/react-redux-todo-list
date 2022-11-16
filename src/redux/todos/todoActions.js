import { FETCH_ALL_TODOS, ADD_NEW_TODO, UPDATE_TODO, DELETE_TODO } from "./todoTypes";

export const actionCreators = {
    fetchTodos: (payload) => {
        return {
            type: FETCH_ALL_TODOS,
            payload
        }
    },
    
    addTodo: (payload) => {
        return {
            type: ADD_NEW_TODO,
            payload
        }
    },
    
    updateTods: (payload) => {
        return {
            type: UPDATE_TODO,
            payload
        }
    },
    
    deleteTods: (payload) => {
        return {
            type: DELETE_TODO,
            payload
        }
    }
}