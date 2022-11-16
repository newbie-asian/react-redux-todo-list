import { ADD_NEW_TODO, DELETE_TODO, TODO_COMPLETED, UPDATE_TODO } from './todoTypes'

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TODO: 
            const newTodo = action.payload;
            return {todos: [...state.todos, newTodo]}

        case DELETE_TODO:
            const { todos } = state;
            if (!todos.length) return
            const filteredTodos = state.todos.filter(todo => {
                console.log("%c Line:17 🍺 todo", "color:#6ec1c2", todo);
                console.log("%c Line:19 🌽 action.payload", "color:#3f7cff", action.payload);
                return todo.id !== action.payload
            })
            console.log("%c Line:17 🥔 filteredTodos", "color:#3f7cff", filteredTodos);
            return {todos: [...filteredTodos]}
        
        case TODO_COMPLETED:
            if (!state.todos.length) return;
            
            const newMappedTodos = state.todos.map(todo => {
                return todo.id === action.payload ? {...todo, status: "Completed"} : {...todo}
            })

            return {todos: [...newMappedTodos]};

        case UPDATE_TODO:
            if (!state.todos.length) return;

            const updatedMappedTodos = state.todos.map(todo => {
                return  todo.id === action.payload.id ? {...action.payload} : {...todo}
            })

            return {todos: [...updatedMappedTodos]}

        default: return state;
    }
}

export default todoReducer