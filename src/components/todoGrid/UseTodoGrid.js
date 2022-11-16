import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'grommet';
import TodoGrid from './TodoGrid';

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

   

    const temp_data = props.todos

  return (
    <TodoGrid default_column={default_column} temp_data={temp_data} />
  )
}


const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(UseTodoGrid)