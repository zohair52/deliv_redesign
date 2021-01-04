import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Deliv</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/adduser" activeClassName="is-active">Add User</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit User</NavLink>
  </header>
);

export default Header;
