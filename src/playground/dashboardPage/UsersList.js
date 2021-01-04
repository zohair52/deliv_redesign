
import {connect} from 'react-redux';
import React from 'react';
import { DataGrid} from '@material-ui/data-grid';
import UserListItem from './UserListItem';
import selectUsers from '../selectors/users';
import { addUser } from '../actions/users';


const columns = [
  { field: 'id', headerName: 'ID', width: 30 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'userName', headerName: 'Username', width: 130 },
  { field: 'password', headerName: 'Password', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },

  {
    field: 'phoneNumber',
    headerName: 'Phone# ',
    type: 'number',
    width: 90,
  },
 
];

const UsersList = (props) => {
 const {name, label, value, error=null, onChange} = props;
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
        dataSource = {UserListItem}
        showBorder={true}
        >
        <columns field="id" />
        <columns
          field= {name}
          headerName={label}
          value= {value}
          onChange={onChange}
          {...(error && {error:true,helperText:error})}
        />
        
        </DataGrid>
        
       
      </div>
    );
  
};


const mapStateToProps = (state)=> {
  return{
    users: selectUsers(state.users)
  };
};


export default connect(mapStateToProps) (UsersList);
