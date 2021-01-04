import React from 'react';
import {connect} from 'react-redux';
import * as userService from "../services/userService";
import AddUserForm from './AddUserForm';
import {Paper, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3), 
  }
}))


const AddUserPage = (props) => {
    const classes = useStyles();
  return (
    
    <div>
     <h1>Add User</h1> 
      <Paper className = {classes.pageContent}>
      <AddUserForm
      handleSubmit={(data) => {
          props.dispatch(userService.insertUser(data));
          props.history.push('/');
        }}
        />
      </Paper>
    </div>


  )

    
};

export default connect()(AddUserPage);
