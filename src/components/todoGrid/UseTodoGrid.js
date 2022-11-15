import React from 'react';
import { Button, Text } from 'grommet'
import { BsFillCheckCircleFill, BsPencilSquare, BsTrash } from 'react-icons/bs'
import TodoGrid from './TodoGrid'

const UseTodoGrid = () => {
    const default_column = [
        {
            property: 'id',
            header: <Text>ID</Text>,
            primary: true,
        },
        {
            property: 'title',
            header: 'Title',
            // render: datum => (
            //     <Box pad={{ vertical: 'xsmall' }}>
            //         <Meter
            //             values={[{ value: datum.percent }]}
            //             thickness="small"
            //             size="small"
            //         />
            //     </Box>
            // ),
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

    const default_actions = [
        <Button label={<BsFillCheckCircleFill />} plain={true} />,
        <Button label={<BsPencilSquare />} plain={true}/>,
        <Button label={<BsTrash />} plain={true}/>
    ]

  return (
    <TodoGrid default_column={default_column} default_actions={default_actions} />
  )
}

export default UseTodoGrid