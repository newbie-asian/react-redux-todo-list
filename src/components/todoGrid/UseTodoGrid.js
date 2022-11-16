import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'grommet';
import TodoGrid from './TodoGrid';
import { actionCreators } from '../../redux/todos/todoActions';

const UseTodoGrid = (props) => {
    const default_column = [
        {
            property: 'id',
            header: <Text>ID</Text>,
            primary: true,
        },
        {
            property: 'title',
            header: 'Title',
        },
        {
            property: 'description',
            header: <Text>Description</Text>,
        },
        {
            property: 'created_date',
            header: <Text>Date Created</Text>,
        },
        {
            property: 'due_date',
            header: <Text>Due Date</Text>,
        },
        {
            property: 'status',
            header: <Text>Status</Text>,
        },
        {
            property: 'actions',
            header: <Text>Actions</Text>,
        },
    ]

    const handleCompleteTodo = (id) => {
        props.completeTodo(id)
    }

    const handleDeleteTodo = (id) => {
        console.log("%c Line:41 🍯 id", "color:#3f7cff", id);
        props.deleteTodo(id);
    }

  return (
    <TodoGrid default_column={default_column} todos={props.todos} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />
  )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: payload => dispatch(actionCreators.deleteTodo(payload)),
        completeTodo: payload => dispatch(actionCreators.completeTodo(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseTodoGrid)