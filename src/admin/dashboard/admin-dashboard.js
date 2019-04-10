import React, { Component } from 'react';
import { withContext } from '../../AuthContext';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

import Dashboard from './dashboard';
import Requests from './requests';
import AdminSidebar from './admin-sidebar';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';


class AdminDashboard extends Component {
    render() {
      return (

        <React.Fragment>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/admin/requests">View Tickets</Nav.Link>
              <Nav.Link href="/admin/dashboard">View Statistics</Nav.Link>

            </Nav>
            <a href="/" style={{color:'#fff'}}>Log out</a>
          </Navbar>


          <Dashboard />
          <Requests />
        </React.Fragment>
      )
    }
  }

  export default withContext(AdminDashboard);
