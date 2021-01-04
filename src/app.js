import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/confirgureStore';
import { addUser } from './actions/users';
import getVisibleUsers from './selectors/users';
import 'normalize.css/normalize.css';
import './styles/styles.scss';




const store = configureStore(); 

// store.dispatch(addUser({firstName:'John', lastName: 'Doe'}));
// store.dispatch(addUser({firstName:'David', lastName: 'Doe', userName: 'davidjoe51'}));

const state = store.getState();
// const visibleUsers = getVisibleUsers(state.users);
// console.log(visibleUsers);

 
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
