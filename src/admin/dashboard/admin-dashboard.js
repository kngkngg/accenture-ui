import React, { Component } from 'react';
import { withContext } from '../../AuthContext';

import Dashboard from './dashboard';
import AdminSidebar from './admin-sidebar';


class AdminDashboard extends Component {
    render() {
      return (
        <React.Fragment>
          <AdminSidebar />
          <Dashboard />
        </React.Fragment> 
      )
    }
  }
  
  export default withContext(AdminDashboard);