import React, { Component } from 'react';
import { withContext } from '../../AuthContext';
import axios from 'axios';

import { Tab, Tabs, Table } from 'react-bootstrap';

class Requests extends Component {
    constructor(props) {
      super(props);
      this.state = {
        key: 'unsolved-tickets',
      };
    }
  
    render() {
      return (
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
                  <th>Requested</th>
                  <th>Type</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
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
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="new-tickets" title="New Tickets">
          
          </Tab>
          <Tab eventKey="updated-tickets" title="Updated Tickets" disabled>
            
          </Tab>
        </Tabs>
      );
    }
  }

  export default withContext(Requests);