import React from 'react';
import { DataTable, Text, Meter, Box, Button } from 'grommet';
import { BsCheckCircle, BsPencilSquare, BsTrash } from 'react-icons/bs'
import UseTodoEditForm from '../todoEditForm/UseTodoEditForm';


const TodoGrid = (props) => {
    const { default_column, todos, handleDeleteTodo, handleCompleteTodo } = props;
    
    return (
        <DataTable
            columns={default_column}
            pad="1rem"
            rowProps={{ "primary-key-value": { pad: "1rem" } }}
            data={todos.map((data, index) => {
                return {...data, id: index + 1, actions: (
                    <Box direction='row' gap='1rem'>
                        <Button label={<BsCheckCircle />} plain={true} color="green" onClick={() => handleCompleteTodo(data.id)}/>
                        <UseTodoEditForm id={data.id} />
                        <Button label={<BsTrash />} plain={true} onClick={() => handleDeleteTodo(data.id)} color="red"/>
                    </Box>
                )}
            })}
        />
    )
}

export default TodoGrid