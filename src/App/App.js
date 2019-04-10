import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Navigation from '../navigation/navigation';
import Home from '../home/home';
import { AuthProvider } from '../AuthContext';
import UserDashboard from '../dashboard/user-dashboard';
import AdminDashboard from '../admin/dashboard/admin-dashboard';
import ProtectedRoute from '../ProtectedRoute';
import AdminLogin from '../admin-login/admin-login';
import AdminSideBar from '../admin/dashboard/admin-sidebar';
import Dashboard from '../admin/dashboard/dashboard';
import Requests from '../admin/dashboard/requests';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <AuthProvider>
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/admin_login' component={AdminLogin} />
            <ProtectedRoute path='/user/dashboard' component={UserDashboard}/>
            <Route path='/admin/dashboard' component={Dashboard}/>
            <Route path='/admin/requests' component={Requests} />
            </Switch>
          </AuthProvider>
        </Router>

      </div>
    );
  }
}

export default App;
