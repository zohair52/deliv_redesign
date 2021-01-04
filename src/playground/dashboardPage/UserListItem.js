import React from 'react';
import { connect } from 'react-redux';


  const UserListItem = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', userName: 'johnSnow123', email: 'johnsnow@gmail.com',  phoneNumber: 8122131495 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', userName:'cerseilannister12', email: 'cerseilannister@gmail.com',  phoneNumber: 8122131495 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', userName: 'jaimelannister32', email: 'jaimelann@ymail.com',  phoneNumber: 8122131495 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', userName: 'aryastark50', email: 'aryastark@hotmail.com', phoneNumber: 8122131495 },
 
];

// const UserListItem = ({id}) => (
//     <div style={{ height: 400, width: '100%' }}>
//     <DataGrid rows={rows} columns={columns}  pageSize={5} checkboxSelection />
//     <button onClick= {() => {
//         dispatch(removeUser({id}));
//     }}>Remove</button>
//     </div>
// );

export default UserListItem;