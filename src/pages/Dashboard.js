import React, { useState } from 'react';
import  {Box} from 'grommet';
import UseTodoForm from '../components/todoForm/UseTodoForm';
import UseTodoGrid from '../components/todoGrid/UseTodoGrid';
// todo name, created_date, deadline, description, status
const Dashboard = () => {

  return (
    <>
        <Box pad="medium" direction='column' responsive={true}>
          <Box width="small" margin={{bottom: "large"}}>
            <UseTodoForm />
          </Box>

          <Box background="light-3">
            <UseTodoGrid />
          </Box>
        </Box>
    </>
  )
}

export default Dashboard