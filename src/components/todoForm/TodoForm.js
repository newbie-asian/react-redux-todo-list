import React, { useState } from 'react';
import {Box, Button, Layer, FormField, DateInput, TextInput, TextArea} from 'grommet';
import { BsXLg } from "react-icons/bs"; 

const TodoForm = (props) => {
  const { todo, handleInputChange, handleSubmit, showModal, setShowModal } = props;


  return (
    <Box>
        <Button primary label="Add Todo" onClick={() => setShowModal(true)} />
          {showModal && (
            <Layer
              onEsc={() => setShowModal(false)}
              onClickOutside={() => setShowModal(false)}
              modal={true}
              style={{padding: "2rem", minWidth: "600px"}}
            >
              <Button label={<BsXLg />} onClick={() => setShowModal(false)} alignSelf="end" style={{border: "none"}} margin={{bottom: "small"}}/>

              <FormField label="Title">
                <TextInput placeholder="Title" name='title' value={todo.title} onChange={handleInputChange} />
              </FormField>

              <FormField label="Description">
                <TextArea placeholder='Description' name='description' value={todo.description} onChange={handleInputChange} />
              </FormField>

              <FormField label="Due Date">
                <TextInput type="date" min={new Date().toISOString().slice(0, 10)} name='due_date' value={todo.due_date} format="mm/dd/yyyy" onChange={handleInputChange} />
              </FormField>

              <Button 
              label="Add" 
              onClick={() => {
                handleSubmit() 
                setShowModal(false)
              }}  
              alignSelf="center" 
              margin={{top: "2rem"}}/>

            </Layer>
          )}
    </Box>
  )
}

export default TodoForm