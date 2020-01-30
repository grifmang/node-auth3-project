import React from 'react';
import Login from "./components/Login";
import { Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import Users from "./components/Users";
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <>
      <Route path='/login' component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/users" component={Users} />
    </>
  );
}

export default App;
