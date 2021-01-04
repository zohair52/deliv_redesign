import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import * as userService from "../services/userService";
import Controls from "../components/controls/Controls";
import { useForm, Form } from '../components/useForm';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]
const initialFValues = {
    id: 0,
    lastName: '',
    firstName:  '',
    userName: '',
    password: '',
    showPassword: false,
    email: '',
    mobile: '',
    gender: 'male',
    userDate: new Date(),
  
}

export default function AddUserForm(props) {

    const { addOrEdit, recordForEdit } = props

    
    const validate = (fieldValues = values) => {  
        let temp = { ...errors }
        if ('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."
        if ('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ('userName' in fieldValues)
            temp.userName = fieldValues.userName ? "" : "This field is required."   
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        handleClickShowPassword,
        handleMouseDownPassword,
        resetForm

    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            addOrEdit(values, resetForm);            
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    },
        [recordForEdit]
    
    )
  
    const handleChange = (props) => (e) => {
        setValues({ ...values, [props]: e.target.value});
      };

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="lastName"
                        label="Last Name"
                        value={values.lastName}
                        onChange={handleInputChange}
                        error={errors.lastName}
                    />
                    <Controls.Input
                        name="firstName"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleInputChange}
                        error={errors.firstName}
                    />
                    <Controls.Input
                        name="userName"
                        label="Username"
                        value={values.userName}
                        onChange={handleInputChange}
                        error={errors.userName}
                    />
                    <Controls.Input
                            type ={values.showPassword ? 'text' : 'password'}
                            label= "Password"
                            value={values.password}
                            InputProps = {{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ) 
                            }}
                            
                            onChange={handleChange('password')}
                     />
                </Grid>
                <Grid item xs={6}>

                    <Controls.Input
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        name="mobile"
                        label="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                   

               
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                
                    <Controls.DatePicker
                        name="userDate"
                        label="Date"
                        value={values.userDate}
                        onChange={handleInputChange}
                    />
                
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                      
                    </div>
                </Grid>
            </Grid>
        </Form>
    )

}

