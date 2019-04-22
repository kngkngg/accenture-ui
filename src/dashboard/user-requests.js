import React, { Component } from 'react';
import { withContext } from '../AuthContext';
import Request from './user-request';
import axios from 'axios';
import {Navbar,Nav, Overlay, Card, Form, Row, Col} from 'react-bootstrap';
import './user-requests.css';

import { Tab, Tabs, Table } from 'react-bootstrap';

import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserRequests extends Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
        name: ''
      };

      this.retrieveData = this.retrieveData.bind(this);
      this.showRequestList = this.showRequestList.bind(this);
      this.componentDidUpdate = this.componentDidUpdate.bind(this);
      this.formatDate = this.formatDate.bind(this);
      this.showPriority = this.showPriority.bind(this);
    }

    retrieveData() {
      var API_URL = 'http://accenturesutd.herokuapp.com/users/1/requests';
      return axios.get(API_URL)
        .then(({data}) => {
            this.setState({ results: data, name: data[0].requester })
        })
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

      return months[month] + " " + date;
    }

    componentDidMount() {
      this.retrieveData();

    }

    componentDidUpdate() {
      this.retrieveData();

    }

    showPriority(r) {
      if (r.priority) {
        return 'Urgent';
      } else {
        return 'Normal';
      }
    }

    showRequestList() {
      return (
        <React.Fragment>
        <div className="ticket-info-container">
          <div className="tickets-name">Hello {this.state.name}, here are your tickets</div>
          <div className="num-tickets">{this.state.results.length} tickets</div>
        </div>
        <div className= "tickets-table">
        <Table responsive hover size="md">
          <thead className="ticket-header">
            <tr>
              <th><Form.Check type="checkbox" /></th>
              <th></th>
              <th>Subject</th>
              <th>Requester</th>
              <th>Requested</th>
              <th>Topic</th>
              <th>Priority</th>
            </tr>
          </thead>
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
                  length={this.state.results.length}
                  priority={this.showPriority(r)}
                  status={r.status}
                />
    
              </React.Fragment>
            ))}
            </tbody>
            </Table>
            </div>
          </React.Fragment>
      )
    }

    render() {
      return (
        <div style={{height: '100vh'}}>
        <div className="content-container">
            {this.showRequestList()}
         </div>  
        </div>
      );
    }
  }

  export default withContext(UserRequests);
