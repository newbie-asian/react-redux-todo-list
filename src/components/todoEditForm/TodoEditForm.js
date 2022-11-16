import React from 'react';
import {Box, Button, FormField, TextInput, TextArea, Layer} from 'grommet';
import { BsPencilSquare, BsXLg } from 'react-icons/bs';

const TodoEditForm = (props) => {
    const { showModal, setShowModal, todo, handleInputChange, handleSubmit } = props;
    return (
        <Box>
            <Button label={<BsPencilSquare />} plain={true} color="orange" onClick={() => {setShowModal(true)}} />
                {showModal && (
                    <Layer
                    onEsc={() => setShowModal(false)}
                    onClickOutside={() => setShowModal(false)}
                    modal={true}
                    style={{padding: "2.5rem", minWidth: "600px"}}
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
                        label="Edit Todo" 
                        primary
                        onClick={() => {
                        handleSubmit() 
                        setShowModal(false)
                        }}  
                        alignSelf="center" 
                        margin={{top: "2rem"}}
                        style={{backgroundColor: "orange", border: "none", padding: ".8rem 0", minWidth: "10rem", borderRadius: "2rem"}}
                    />
        
                    </Layer>
                )}
            </Box>
        )
}

export default TodoEditForm