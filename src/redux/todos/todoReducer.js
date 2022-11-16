import { ADD_NEW_TODO } from './todoTypes'

const initialState = {
    todos: [
        {
            title: "Buy rice",
            description: "Go to Metro after shift and buy rice",
            created_date: "11/17/2022",
            due_date: "11/17/2022",
            status: "Pending"
        }
    ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TODO: 
            const newTodo = action.payload;
            return {todos: [...state.todos, newTodo]}
        default: return state;
    }
}

export default todoReducer