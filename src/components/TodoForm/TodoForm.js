import React, { useState } from 'react';
import {Box, Button, Layer, FormField, DateInput, TextInput, TextArea} from 'grommet';
import { BsXLg } from "react-icons/bs"; 

const TodoForm = (props) => {
  const { todo, handleInputChange, showModal, setShowModal } = props;


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
                <TextInput placeholder="Title" />
              </FormField>

              <FormField label="Description">
                <TextArea placeholder='Description' />
              </FormField>

              <FormField label="Due Date">
                <DateInput />
              </FormField>

              <Button label="Add" onClick={() => setShowModal(false)}  alignSelf="center" margin={{top: "2rem"}}/>

            </Layer>
          )}
    </Box>
  )
}

export default TodoForm