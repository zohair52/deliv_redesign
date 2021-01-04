import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import AddUserPage from '../components/AddUserPage';
import EditUserPage from '../components/EditUserPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/adduser" component={AddUserPage} />
        <Route path="/edit/:id" component={EditUserPage}  />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
