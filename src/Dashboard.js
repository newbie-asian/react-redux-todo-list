import React from 'react';
import  {Box, Button, DateInput, TextInput, TextArea} from 'grommet';
import UseTodoForm from './components/TodoForm/UseTodoForm';

// todo name, created_date, deadline, description, status
const Dashboard = () => {
  return (
    <>
        <UseTodoForm/>
    </>
  )
}

export default Dashboard