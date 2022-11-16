import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/todos/todoActions';
import TodoEditForm from './TodoEditForm'

const UseTodoEditForm = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [todo, setTodo] = useState({})

    useEffect(() => {
        const { todos, id } = props;

        const newTodo = todos.find(todo => id === todo.id)
        setTodo({...newTodo})
    }, [])

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setTodo(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = () => {
        props.updateTodo(todo)
    }

  return (
    <TodoEditForm 
        showModal={showModal} 
        setShowModal={setShowModal} 
        todo={todo} 
        handleInputChange={handleInputChange} 
        handleSubmit={handleSubmit} 
    />
  )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTodo: payload => dispatch(actionCreators.updateTodo(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseTodoEditForm)