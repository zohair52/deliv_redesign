import {v4 as uuidv4} from 'uuid';

//Add user

export const addUser = (
    {
        firstName = '',
        lastName = '',
        userName = '',
        password= '',
        email= '',
        mobile= 0

    } = {}


    ) => ({
        type: 'ADD_USER',
        user: {
            id: uuidv4(), 
            firstName,
            lastName,
            userName,
            password,
            email,
            mobile
        }
     
    }
);

// Edit User
export const editUser = (id, updates) => ({
    type: 'Edit_USER',
    id,
    updates
});

// Remove User
export const removeUser = ({ id } = {}) => ({
    type: "REMOVE_USER",
    id
});




