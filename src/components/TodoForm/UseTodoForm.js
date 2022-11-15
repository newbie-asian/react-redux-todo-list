import React from 'react'
import TodoForm from './TodoForm'

const UseTodoForm = () => {
    const [todo, setTodo] = useState({
        title: "",
        description: "",
        created_date: "",
        due_date: "",
        st
    })

  return (
    <TodoForm />
  )
}

export default UseTodoForm