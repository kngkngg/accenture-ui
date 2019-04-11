import React, { Component } from 'react';
import { withContext } from '../../AuthContext';
import RequestList from './requestList';
import axios from 'axios';
import {Navbar,Nav} from 'react-bootstrap';

import { Tab, Tabs, Table } from 'react-bootstrap';

class Requests extends Component {
    constructor(props) {
      super(props);
      this.state = {
        key: 'unsolved-tickets',
        results: []
      };

      this.retrieveData = this.retrieveData.bind(this);
    }

    retrieveData() {
      var API_URL = 'http://accenturesutd.herokuapp.com/admin/1/requests/urgent';
      return axios.get(API_URL)
        .then(({data}) => {
          this.setState({results: data})
        })
    }

    componentDidMount() {
      this.retrieveData();
    }

    render() {
      return (
        <div>
        <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
            <Nav className="mr-auto">

               <Nav.Link href="/admin/requests">View Tickets</Nav.Link>
               <Nav.Link href="/admin/dashboard">View Statistics</Nav.Link>
               
            </Nav>
            <a href="/" style={{color:'#fff'}}>Log out</a>
          </Navbar>
        </div>
        <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="unsolved-tickets" title="Unsolved Tickets">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Requester</th>
                  <th>Date</th>
                  <th>Email</th>
                  <th>Subject</th>
                </tr>
              </thead>
              {/* <tbody>
                <tr>
                  <td>Issue</td>
                  <td>Jake</td>
                  <td>23/02/2019 13:00</td>
                  <td>Incident</td>
                  <td>Normal</td>
                </tr>
                <tr>
                  <td>Complaint</td>
                  <td>Amy</td>
                  <td>23/02/2019 08:00</td>
                  <td>Incident</td>
                  <td>Urgent</td>
                </tr>
                <tr>
                  <td>Request</td>
                  <td>Terry</td>
                  <td>21/02/2019 23:00</td>
                  <td>Incident</td>
                  <td>Urgent</td>
                </tr>
              </tbody> */}
              <RequestList results={this.state.results} />
            </Table>
          </Tab>
          <Tab eventKey="new-tickets" title="New Tickets">

          </Tab>
          <Tab eventKey="updated-tickets" title="Updated Tickets" disabled>

          </Tab>
        </Tabs>
        </div>
        </div>
      );
    }
  }

  export default withContext(Requests);
