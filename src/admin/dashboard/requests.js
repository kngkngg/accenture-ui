import React, { Component } from 'react';
import { withContext } from '../../AuthContext';
import RequestList from './requestList';
import Request from './request';
import axios from 'axios';
import {Navbar,Nav} from 'react-bootstrap';

import { Tab, Tabs, Table } from 'react-bootstrap';

class Requests extends Component {
    constructor(props) {
      super(props);
      this.state = {
        key: 'urgent',
        results: []
      };

      this.retrieveData = this.retrieveData.bind(this);
      this.showRequestList = this.showRequestList.bind(this);
      this.componentDidUpdate = this.componentDidUpdate.bind(this);
      this.formatDate = this.formatDate.bind(this);
    }

    retrieveData() {
      var API_URL = 'http://accenturesutd.herokuapp.com/admin/4/requests/';
      if (this.state.key === 'urgent') {
        return axios.get((API_URL + 'urgent'))
          .then(({data}) => {
            this.setState({results: data.urgent})
          })
      } else if (this.state.key === 'new') {
        return axios.get((API_URL + 'new'))
          .then(({data}) => {
            this.setState({results: data.new})
          })
      }
    }

    formatDate(date) {
      var d = new Date(date),
          month = d.getMonth(),
          months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          date = d.getDate(),
          hour = d.getHours(),
          min = d.getMinutes();

      if (d.getMinutes() < 10) {
        min = '0' + d.getMinutes();
      }

      return months[month] + " " + date + " " + hour + ":" + min; 
    }

    componentDidMount() {
      this.retrieveData();
    }

    componentDidUpdate() {
      this.retrieveData();
    }

    showRequestList() {
      return (
        <tbody>
          {this.state.results.map(r => (
            <React.Fragment>
              <Request
                requester={r.requester}
                topic={r.topic}
                date_created={this.formatDate(r.date_created)}
                user_email={r.user_email}
                subject={r.subject}
                message={r.message}
                id={r.id}

              />
            </React.Fragment>
          ))}
        </tbody>
      )
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
          <Tab eventKey="urgent" title="Urgent Tickets">
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
              {/* <RequestList results={this.state.results} /> */}
              
                {this.showRequestList()}
              
            </Table>
          </Tab>
          <Tab eventKey="new" title="New Tickets">
            <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Requester</th>
                    <th>Date</th>
                  <th>Email</th>
                  <th>Suject</th>
                </tr>
              </thead>
              {this.showRequestList()}
            </Table>
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
