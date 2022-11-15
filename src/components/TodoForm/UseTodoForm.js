import React, { useState } from 'react'
import TodoForm from './TodoForm'

const UseTodoForm = () => {
    const [showModal, setShowModal] = useState(false);

    const [todo, setTodo] = useState({
        title: "",
        description: "",
        created_date: "",
        due_date: "",
        status: "pending"
    })

    const handleInputChange = (evt) => {
      const { name, value } = evt.target;

      setTodo(prevState => ({
        ...prevState,
        [name]: value
      }))
    }

  return (
    <TodoForm todo={todo} handleInputChange={handleInputChange} showModal={showModal} setShowModal={setShowModal} />
  )
}

export default UseTodoForm