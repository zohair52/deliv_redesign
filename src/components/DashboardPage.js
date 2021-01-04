import React, {Fragment, useState} from 'react';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../components/useTable";
import Controls from "../components/controls/Controls";
import { Search } from "@material-ui/icons";
import * as userService from "../services/userService";
import AddUserForm from './AddUserForm';
import AddIcon from '@material-ui/icons/Add';
import Popup from "../components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Notification from '../components/Notification';
import ConfirmDialog from "../components/ConfirmDialog";

const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))

const headCells = [
  { id: 'lastName', label: 'Last Name' },
  { id: 'firstName', label: 'First Name' },
  { id: 'userName', label: 'UserName' },
  { id: 'password', label: 'Password' },
  { id: 'email', label: 'Email Address' },
  { id: 'mobile', label: 'Mobile Number' },
  { id: 'action', label: 'Actions', disableSorting: true}
  
]

export default function Dashboard() {

  const classes = useStyles();
  const [records, setRecords] = useState(userService.getAllUsers())
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const [notify, setNotify] = useState({isOpen: false, message: '', type: ''})
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = useTable(records, headCells, filterFn);

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
      fn: items => {
        if (target.value == "")
          return items;
        else
          return items.filter(x => x.firstName.toLowerCase().includes(target.value) || x.lastName.toLowerCase().includes(target.value) ) 
      }
    })
  }

  const addOrEdit = (user, resetForm) => {
    if(user.id ==0)
      userService.insertUser(user)
    else
      userService.updateUser(user)
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
      setRecords(userService.getAllUsers())
      setNotify({
        isOpen: true,
        message: 'Submitted Successfully',
        type: 'success'
      })
  }
  
  const openInPopup = item => {
    setRecordForEdit(item)
    setOpenPopup(true)
  }
  
  const onDelete = id => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
    })
    userService.deleteUser(id);
    setRecords(userService.getAllUsers())
    setNotify({
      isOpen: true,
      message: 'Deleted Successfully',
      type: 'error'
    })
  }

  return (
    <Fragment>
      <Paper className={classes.pageContent}>
      <Toolbar>
          <Controls.Input
              label="Search User"
              className={classes.searchInput}
              InputProps={{
                  startAdornment: (<InputAdornment position="start">
                      <Search />
                  </InputAdornment>)
              }}
              onChange={handleSearch}
          />
          <Controls.Button
              text= "Add User"
              variant = "outlined"
              startIcon={<AddIcon />}
              className= {classes.newButton}
              onClick= {() => {setOpenPopup(true); setRecordForEdit(null); }}
          />
      
      </Toolbar>
      <TblContainer>
          <TblHead />
          <TableBody>
              {
                recordsAfterPagingAndSorting().map(item =>
                  (<TableRow key={item.id}>
                      <TableCell>{item.lastName}</TableCell>
                      <TableCell>{item.firstName}</TableCell>
                      <TableCell>{item.userName}</TableCell>
                      <TableCell>{item.password.split('').map(() => '*')}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.mobile}</TableCell>
                      <TableCell>
                          <Controls.ActionButton
                              color="primary"
                              onClick={() => { openInPopup(item) }}>
                              <EditOutlinedIcon fontSize="small" />
                          </Controls.ActionButton>
                          <Controls.ActionButton
                              color="secondary"
                              onClick={() => {
                                setConfirmDialog({
                                    isOpen: true,
                                    title: 'Are you sure you want to delete this record?',
                                    subTitle: "You can't undo this operation",
                                    onConfirm: () => { onDelete(item.id) }
                                })
                            }}>
                              <CloseIcon fontSize="small" />
                          </Controls.ActionButton>
                      </TableCell>
                  </TableRow>)
              )
                }
            </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title= "User Form"
        openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}
      >
          <AddUserForm
            recordForEdit = {recordForEdit}
            addOrEdit = {addOrEdit}
          /> 
               
      </Popup>
      <Notification 
        notify={notify}
        setNotify={setNotify}
      />
      <ConfirmDialog
        confirmDialog = {confirmDialog}
        setConfirmDialog= {setConfirmDialog}
      /> 
    
    </Fragment>
  )

}
