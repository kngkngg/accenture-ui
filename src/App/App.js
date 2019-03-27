import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Navigation from '../navigation/navigation';
import Home from '../home/home';
import { AuthProvider } from '../AuthContext';
import UserDashboard from '../dashboard/user-dashboard';
import ProtectedRoute from '../ProtectedRoute';
import AdminLogin from '../admin-login/admin-login';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <AuthProvider>
            <Navigation />
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/admin_login' component={AdminLogin} />
            <ProtectedRoute path='/user/dashboard' component={UserDashboard}/>
            </Switch>
          </AuthProvider>
        </Router>

      </div>
    );
  }
}

export default App;
