import { createStore, combineReducers } from 'redux';
import usersReducerDefaultState from '../reducers/users'

export default () => {
  const store = createStore(
    combineReducers({
      users: usersReducerDefaultState
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  ); 
  return store;
};
