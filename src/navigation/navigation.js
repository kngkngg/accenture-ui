import React, { Component } from 'react';
import'./navigation.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {Modal} from 'react-bootstrap/';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import axios from 'axios';

class Navigation extends Component {
  
  constructor(props, context) {
    super(props, context);
    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeContact = this.changeContact.bind(this);
    this.changeTopic = this.changeTopic.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      show: false,
      name: '',
      email: '',
      contact: '',
      topic: '',
      message: '',
    };
  }
  
  handleClose() {
    this.setState({ show: false });

  }
  
  handleShow() {
    this.setState({ show: true });
 
  }
  
  changeName(event) {
    this.setState({name : event.target.value})

  }
  
  changeEmail(event) {
    this.setState({email : event.target.value})
   
  }
  
  changeContact(event) {
    this.setState({contact : event.target.value})
    
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
  
  changeMessage(event) {
    this.setState({message : event.target.value})
    
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
      <Navbar className="navbar-container" bg="none" variant="dark" expand="lg">
        <Navbar.Brand className="name" href="/">
          <img src={require("./LOGO.png")}></img>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Nav.Link className="navlink" href="/about_us">
              <p>About Us</p>
            </Nav.Link>
            <Nav.Link className="navlink" href="/assets">
              <p>Our assets</p>
            </Nav.Link>
            <Nav.Link className="navlink" href="/case_study">
              <p>Case Studies</p>
            </Nav.Link>
            <Nav.Link className="navlink" onClick={this.handleShow} >
              <p>Contact us</p>
            </Nav.Link>
            <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Contact Us</Modal.Title>
              </Modal.Header> 
              <Modal.Body>
                <form onSubmit={this.onSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control required 
                                  type="name" placeholder="e.g. Antony Pym" 
                                  value={this.state.name}
                                  onChange={this.changeName}/>
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control required
                                  type="email"
                                  placeholder="e.g. antonypym@accenture.com"
                                  value={this.state.email}
                                  onChange={this.changeEmail}/>
                  </Form.Group>
                  <Form.Group controlId="formContact">
                    <Form.Label>Your Contact</Form.Label>
                    <Form.Control required
                                  type="contact"
                                  placeholder="e.g. 91234567"
                                  value={this.state.contact}
                                  onChange={this.changeContact}/>
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
                                as="textarea"
                                rows="3"
                                value={this.state.message}
                                onChange={this.changeMessage}/>
                </Form.Group>
                <Button variant="secondary" onClick={this.handleClose} type="submit">
                  Submit
                </Button>
               
                </form>
              </Modal.Body>
              <Modal.Footer>

                
              </Modal.Footer>
            </Modal>
            <Nav.Link className="navlink" >
              <p>Login</p>
            </Nav.Link>
            <Nav.Link className="navlink" >
              <p>Register</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;