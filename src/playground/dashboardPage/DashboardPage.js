import React from 'react';
import SimpleForm from './SimpleForm';

class DashboardPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <SimpleForm onSubmit={this.submit} />
  }
}

export default DashboardPage; 

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// const DashboardPage = () => {
//   return (
//     <div>
//     <form className={useStyles} noValidate autoComplete="off">
//       <TextField id="outlined-basic" label="Username" variant="outlined" />
//       <TextField id="outlined-basic" label="Password" variant="outlined" />
//       <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
//       <TextField id="outlined-basic" label="First Name" variant="outlined" />
//       <TextField id="outlined-basic" label="Last Name" variant="outlined" />
//       <TextField id="outlined-basic" label="Email" variant="outlined" />
//       <TextField id="outlined-basic" label="Phone#" variant="outlined" />

//     </form>
//     </div>
//   );

//   };
