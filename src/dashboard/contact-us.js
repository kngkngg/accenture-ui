import React, { Component } from 'react';
import { withContext } from '../AuthContext';

import { Nav } from 'react-bootstrap';
import { Modal } from 'react-bootstrap/';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import axios from 'axios';

class ContactUs extends Component {
  constructor() {
    super();
    
    this.handleShowContactUs = this.handleShowContactUs.bind(this);
    this.handleCloseContactUs = this.handleCloseContactUs.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changeTopic = this.changeTopic.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      showContactUs: false,
      subject: '',
      topic: '',
      message: '',
      errorMessage: ''
    }
  }
  
  //   changeTopic(event) {
  //   var topics = [];
  //   for (var i=0; i<event.target.options.length; i++) {
  //     if (event.target.options[i].selected) {
  //       topics.push(event.target.options[i].value);
  //     }
  //   }
  //   this.setState({topic :topics})
    
  // }

  changeTopic(event) {
    this.setState({topic : event.target.value})
    
  }
  
  handleCloseContactUs() {
    this.setState({ showContactUs: false });

  }
  
  handleShowContactUs() {
    this.setState({ showContactUs: true });
 
  }
  
  onChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  
  onSubmit(event) {
    event.preventDefault();
    const payload = {
      subject: this.state.subject,
      topic: this.state.topic,
      message: this.state.message,
    }
    
    var API_URL = 'http://accenturesutd.herokuapp.com/users/1/requests'
    return axios.post(API_URL, payload)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    
  }
  
  render() {
    return (
      <React.Fragment>
        <Nav.Link className="navlink" onClick={this.handleShowContactUs} >
          <p style={{ fontSize: '20px' }}>Submit Request</p>
        </Nav.Link>
        <Modal size="lg" show={this.state.showContactUs} onHide={this.handleCloseContactUs}>
          <Modal.Header closeButton>
            <Modal.Title>Submit a Request</Modal.Title>
          </Modal.Header> 
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                  <Form.Control required
                                name="subject"
                                type="subject"
                                placeholder="e.g. Forgot my password"
                                value={this.state.subject}
                                onChange={this.onChange}/>
              </Form.Group>
              <Form.Group controlId="formTopic">
                <Form.Label>Select the assets or topic you are interested in (hold Ctrl/Cmd to select multiple)</Form.Label>
                <Form.Control as="select"
                              value={this.state.value}
                              onChange={this.changeTopic}>
                          <option>General Enquiries</option>
                          <option>IT Related Help</option>
                          <option>Business Opportunities</option>
                          <option>API Enquiries</option>
                          <option>Career Opportunities</option>
                          <option>Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formText">
                <Form.Label>Your Message</Form.Label>
                  <Form.Control required
                                name="message"
                                as="textarea"
                                rows="3"
                                value={this.state.message}
                                onChange={this.onChange}/>
              </Form.Group>
              <Button variant="secondary" onClick={this.handleCloseContactUs} type="submit">
                Submit
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    )
  }
}

export default withContext(ContactUs);