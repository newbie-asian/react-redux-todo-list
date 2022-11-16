import React from 'react';
import { DataTable, Text, Meter, Box, Button } from 'grommet';
import { BsFillCheckCircleFill, BsPencilSquare, BsTrash } from 'react-icons/bs'


const TodoGrid = (props) => {
    const { default_column, temp_data } = props;
    
    return (
        <DataTable
            columns={default_column}
            rowProps={{ "primary-key-value": { pad: "2rem" } }}
            data={temp_data.map((data, index) => {
                return {...data, id: index + 1, actions: (
                    <Box direction='row' gap='1rem'>
                        <Button label={<BsFillCheckCircleFill />} plain={true} />
                        <Button label={<BsPencilSquare />} plain={true}/>
                        <Button label={<BsTrash />} plain={true}/>
                    </Box>
                )}
            })}
        />
    )
}

export default TodoGrid