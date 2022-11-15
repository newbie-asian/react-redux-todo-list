import React from 'react';
import { DataTable, Text, Meter, Box } from 'grommet';

const TodoGrid = (props) => {
    const { default_column, default_actions } = props;
    
    return (
        <DataTable
            columns={default_column}
            rowProps={{ "primary-key-value": { pad: "2rem" } }}
            data={[
                { id: "01", title: "Buy rice", description: "Go to Metro to buy rice", created_date: "11/17/2022", due_date: "11/17/2022", status: "Pending", actions: default_actions },
                { id: "02", title: "Buy rice", description: "Go to Metro to buy rice", created_date: "11/17/2022", due_date: "11/17/2022", status: "Pending" },
                { id: "03", title: "Buy rice", description: "Go to Metro to buy rice", created_date: "11/17/2022", due_date: "11/17/2022", status: "Pending" },
            ]}
        />
    )
}

export default TodoGrid