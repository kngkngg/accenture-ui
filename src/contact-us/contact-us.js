import React, { Component } from 'react';
import { withContext } from '../AuthContext';

import { Nav } from 'react-bootstrap';
import { Modal } from 'react-bootstrap/';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

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
      name: '',
      email: '',
      loginEmail: '',
      loginPassword: '',
      contact: '',
      topic: '',
      message: '',
      errorMessage: ''
    }
  }
  
    changeTopic(event) {
    var topics = [];
    for (var i=0; i<event.target.options.length; i++) {
      if (event.target.options[i].selected) {
        topics.push(event.target.options[i].value);
      }
    }
    this.setState({topic :topics})
    
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
    const post = {
      name: this.state.name,
      email: this.state.email,
      contact: this.state.email,
      topic: this.state.topic,
      message: this.state.message,
    }
    
    fetch('http://10.12.185.9:3000/queries', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }
  
  render() {
    return (
      <React.Fragment>
        <Nav.Link className="navlink" onClick={this.handleShowContactUs} >
          <p>Contact us</p>
        </Nav.Link>
        <Modal size="lg" show={this.state.showContactUs} onHide={this.handleCloseContactUs}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header> 
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                  <Form.Control required
                                name="name"
                                type="name" 
                                placeholder="e.g. Antony Pym" 
                                value={this.state.name}
                                onChange={this.onChange}/>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                  <Form.Control required
                                name="email"
                                type="email"
                                placeholder="e.g. antonypym@accenture.com"
                                value={this.state.email}
                                onChange={this.onChange}/>
              </Form.Group>
              <Form.Group controlId="formContact">
                <Form.Label>Your Contact</Form.Label>
                  <Form.Control required
                                name="contact"
                                type="contact"
                                placeholder="e.g. 91234567"
                                value={this.state.contact}
                                onChange={this.onChange}/>
              </Form.Group>
              <Form.Group controlId="formTopic">
                <Form.Label>Select the assets or topic you are interested in (hold Ctrl/Cmd to select multiple)</Form.Label>
                <Form.Control as="select"
                              multiple
                              value={this.state.value}
                              onChange={this.changeTopic}>
                    <option>API DevOps</option>
                    <option>Chart as a Service</option>
                    <option>Recruitment Platform</option>
                    <option>Aesop</option>
                    <option>Travel Marketplace</option>
                    <option>Banking Lifestyle App</option>
                    <option>AR Car Visualizer</option>
                    <option>AR Car Manual</option>
                    <option>AR Gamification</option>
                    <option>AR Theatre</option>
                    <option>AR Menu</option>
                    <option>AI Wealth Manager</option>
                    <option>Multilingual Chatbot</option>
                    <option>AI Translator</option>
                    <option>Digital Butler</option>
                    <option>Video Analytics</option>
                    <option>Sentiments Analysis</option>
                    <option>ACNAPI MFA Login</option>
                    <option>Ticketing Platform</option>
                    <option>Smart Lock</option>
                    <option>Smart Home</option>
                    <option>Smart Parking</option>
                    <option>Smart Restaurant</option>
                    <option>Queuing System</option>
                    <option>IOT Led Wall</option>
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