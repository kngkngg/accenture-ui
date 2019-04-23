import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Navbar,Nav} from 'react-bootstrap';
import AllTickets from '../dashboard/AllTickets';
import UserRequests from './user-requests';
import ContactUs from './contact-us';
import { withContext } from '../AuthContext';

class UserDashboard extends Component {
  handleDelete(event){
    event.preventDefault();

  }
  render() {
    return (
    <div>
        <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>User Dashboard</Navbar.Brand>
            <Nav className="mr-auto">
              <ContactUs />

            </Nav>
            <a href="/" style={{color:'#fff'}}>Log out</a>
          </Navbar>
        </div>
        <div>
          <UserRequests/>
        </div>
    </div>

    )
  }
}

export default withContext(UserDashboard);
