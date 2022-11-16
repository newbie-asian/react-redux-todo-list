import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/todos/todoActions';
import TodoForm from './TodoForm'

const UseTodoForm = (props) => {
    const [showModal, setShowModal] = useState(false);

    const [todo, setTodo] = useState({
        title: "",
        description: "",
        created_date: new Date().toISOString().slice(0, 10),
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

    console.log("%c Line:27 🍯 props.todos", "color:#6ec1c2", props.todos);
    
    const handleSubmit = () => {
      const payload = {...todo}
      
      props.addTodo(payload)
    }

  return (
    <TodoForm todo={todo} handleInputChange={handleInputChange} handleSubmit={handleSubmit} showModal={showModal} setShowModal={setShowModal} />
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (payload) => dispatch(actionCreators.addTodo(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseTodoForm)