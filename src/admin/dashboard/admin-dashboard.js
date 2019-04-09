import React, { Component } from 'react';
import { withContext } from '../../AuthContext';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from './dashboard';
import Requests from './requests';
import AdminSidebar from './admin-sidebar';


class AdminDashboard extends Component {
    render() {
      return (
        <React.Fragment>
          <AdminSidebar />
          <Dashboard />
          <Requests />
        </React.Fragment> 
      )
    }
  }
  
  export default withContext(AdminDashboard);