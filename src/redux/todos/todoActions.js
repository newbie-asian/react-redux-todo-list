import { FETCH_ALL_TODOS, ADD_NEW_TODO, UPDATE_TODO, DELETE_TODO, TODO_COMPLETED } from "./todoTypes";

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
    
    updateTodo: (payload) => {
        return {
            type: UPDATE_TODO,
            payload
        }
    },
    
    deleteTodo: (payload) => {
        return {
            type: DELETE_TODO,
            payload
        }
    },
    
    completeTodo: (payload) => {
        return {
            type: TODO_COMPLETED,
            payload
        }
    }
}