
import React from 'react';
import { Field, reduxForm } from 'redux-form'

//---------------Simple Form--------------///
const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
          </div>
        </div>
        <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

 export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)

//create new, configured function
//createReduxForm = reduxForm({form: 'simple'})

/*------------------UsersList Map-----------------------------*/ 

// const UsersList = (props) => {
 
//     const {type, value, onChange} = props

//   return (
 
//     <div>
//     <UserListItem
     
//         type={type}
//         value={value}
//         onChange={onChange}
//         pageSize={5} 
//         checkboxSelection />
    
   
//     </div>
    
//   )  
// }

/*-------------Contact Form------------*/

//   constructor(props) {
//       super(props);
//     this.state = {
//         firstName: props.user ? props.user.firstName : '',
//         lastName: props.user ? props.user.lastName: '',
//         userName: props.user ? props.user.userName: '',
//         password: props.user ? props.user.password: '',
//         email: props.email ? props.user.email: '',
//         phoneNumber: props.phoneNumber ? props.user.phoneNumber: ''

//     };
  
//   }
    //  ContactForm = props => {
    //     const {handleSubmit} = props
    //     return <form onSubmit={handleSubmit}>
    //     <div>
    //     <label htmlFor="firstName">First Name</label>
    //     <Field name="firstName" component="input" type="text" />
    //   </div>
    //   <div>
    //     <label htmlFor="lastName">Last Name</label>
    //     <Field name="lastName" component="input" type="text" />
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email</label>
    //     <Field name="email" component="input" type="email" />
    //   </div>
    //   <button type="submit">Submit</button>
        
    //     </form>
    //  }
    //  ContactForm = reduxForm({
    //      form: 'contact'
    //  })(ContactForm)

    //  submit = values => {
    //      console.log(values)
    //  }
    
    // render() {
    //     return
    //     <ContactForm onSubmit = {this.submit}/>
    // }



    /*-------------------Control----------------*/
     //<Controls.Input
                    
                    // id="outlined-adornment-password"
                    // label= "Password"
                    // type={values.showPassword ? 'text' : 'password'}
                    // value={values.password}
                    // onChange={handleChange('password')}
                    // endAdornment={
                    //   <InputAdornment position="end">
                    //     <IconButton
                    //       aria-label="toggle password visibility"
                    //       onClick={handleClickShowPassword}
                    //       onMouseDown={handleMouseDownPassword}
                    //       edge="end"
                    //     >
                    //       {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    //     </IconButton>
                    //   </InputAdornment>
                    // }
                    // labelWidth={70}
                        

                    // />