import React, { Component } from 'react';
import { withContext } from '../../AuthContext';
import RequestList from './requestList';
import Request from './request';
import axios from 'axios';
import {Navbar,Nav, Overlay, Card, Form, Row, Col} from 'react-bootstrap';
import './requests.css';

import { Tab, Tabs, Table } from 'react-bootstrap';

import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Requests extends Component {
    constructor(props) {
      super(props);
      this.state = {
        key: 'unsolved',
        results: [],
        unsolved: 0,
        new: 0,
        urgent: 0,
        unassigned: 0,
        open: 0,
        pending: 0,
        solved: 0
      };

      this.retrieveData = this.retrieveData.bind(this);
      this.showRequestList = this.showRequestList.bind(this);
      this.componentDidUpdate = this.componentDidUpdate.bind(this);
      this.formatDate = this.formatDate.bind(this);
      this.showPriority = this.showPriority.bind(this);
      this.retrieveNumTicket = this.retrieveNumTicket.bind(this);
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
      } else if (this.state.key === 'unsolved') {
        return axios.get((API_URL + 'unsolved'))
          .then(({data}) => {
            this.setState({results: data.unsolved})
          })
      } else if (this.state.key === 'unassigned') {
        return axios.get(('http://accenturesutd.herokuapp.com/tickets/available/'))
          .then(({data}) => {
            this.setState({results: data.available})
          })
      } else if (this.state.key === 'open') {
        return axios.get((API_URL + 'open'))
          .then(({data}) => {
            this.setState({results: data.open})
          })
      } else if (this.state.key === 'pending') {
        return axios.get((API_URL + 'pending'))
          .then(({data}) => {
            this.setState({results: data.pending})
          })
      } else if (this.state.key === 'solved') {
        return axios.get((API_URL + 'solved'))
          .then(({data}) => {
            this.setState({results: data.solved})
          })
      }
    }

    retrieveNumTicket() {
      var API_URL_NUM_TICKET = 'http://accenturesutd.herokuapp.com/admin/4/dashboard';
      return axios.get(API_URL_NUM_TICKET)
        .then(({data}) => {
          this.setState({new: data.new})
          this.setState({unsolved: data.unsolved})
          this.setState({urgent: data.urgent})
          this.setState({unassigned: data.unassigned})
          this.setState({open: data.open})
          this.setState({pending: data.pending})
          this.setState({solved: data.solved})
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
      this.retrieveNumTicket();
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
          <div className="tickets-name">Your {this.state.key} tickets</div>
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
        <div className="content-container">
     
        <Row style={{height: '100vh'}}>
          <Col xs={3}>
            <div className="sidebar-container">
              <Nav 
                activeKey={this.state.key}
                className="flex-column"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}  
              >
                <div>
                  <div className="sidebar-title">Views</div>
                  <span style={{display: 'inline', float:'right'}}><FontAwesomeIcon icon={faRedoAlt} /></span>         
                </div>
                <hr/>
                <Nav.Link className="ticket-selection" eventKey="unsolved"><div><span>Your unsolved tickets</span><span className="number-of-tickets">{this.state.unsolved}</span></div></Nav.Link>
                <Nav.Link className="ticket-selection" eventKey="new"><div><span>New tickets</span><span className="number-of-tickets">{this.state.new}</span></div></Nav.Link>
                <Nav.Link className="ticket-selection" eventKey="urgent"><div><span>Urgent tickets</span><span className="number-of-tickets">{this.state.urgent}</span></div></Nav.Link>
                <Nav.Link className="ticket-selection" eventKey="unassigned"><div><span>Unassigned tickets</span><span className="number-of-tickets">{this.state.unassigned}</span></div></Nav.Link>
                <Nav.Link className="ticket-selection" eventKey="open"><div><span>Open tickets</span><span className="number-of-tickets">{this.state.open}</span></div></Nav.Link>
                <Nav.Link className="ticket-selection" eventKey="pending"><div><span>Pending tickets</span><span className="number-of-tickets">{this.state.pending}</span></div></Nav.Link>
                <Nav.Link className="ticket-selection" eventKey="solved"><div><span>Solved tickets</span><span className="number-of-tickets">{this.state.solved}</span></div></Nav.Link>
              </Nav>
            </div>

          </Col>
          <Col xs={9}>
            {this.showRequestList()}
          {/* <Tabs
            id="controlled-tab-example"
            className="flex-column"
            activeKey={this.state.key}
            onSelect={key => this.setState({ key })}
          >
            <Tab eventKey="urgent" title="Urgent Tickets">
              <div className="ticket-info-container">
                <div className="tickets-name">Your {this.state.key} tickets</div>
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
                    {this.showRequestList()}
                  
                </Table>
              </div>
            </Tab>
            <Tab eventKey="new" title="New Tickets">
              <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Requester</th>
                      <th>Requested</th>
                    <th>Topic</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                {this.showRequestList()}
              </Table>
            </Tab>
            <Tab eventKey="updated-tickets" title="Updated Tickets" disabled>

            </Tab>
          </Tabs> */}
          </Col>
        </Row>
    

         </div>  
        </div>
      );
    }
  }

  export default withContext(Requests);
