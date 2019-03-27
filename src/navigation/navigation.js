import React, { Component } from 'react';
import'./navigation.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Modal } from 'react-bootstrap/';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import  { withContext } from '../AuthContext';
import axios from 'axios';

import Login from '../login/login';
import Register from'../login/register';
import ContactUs from '../contact-us/contact-us';

class Navigation extends Component {
  
  constructor(props, context) {
    super(props, context);
    
    this.onRegister = this.onRegister.bind(this);
    this.onFakeRegister = this.onFakeRegister.bind(this);
    this.onAxiosRegister = this.onAxiosRegister.bind(this);
    
    this.state = {
      errorMessage: '',
      showContactUs: false,
      showLogin: false,
      showRegister: false,
      name: '',
      email: '',
      loginEmail: '',
      loginPassword: '',
      contact: '',
      topic: '',
      message: '',
      registerFirstName: '',
      registerLastName: '',
      registerEmail: '',
      registerPassword: '',
    };
  }

  onLogin(event) {
    event.preventDefault();
    const payload = {
      loginEmail: this.state.loginEmail,
      loginPassword: this.state.loginPassword
    }
    var loginEmail = this.state.loginEmail;
    if (loginEmail.includes("@accenture")) {
      console.log("true");
      this.props.adminLogin(payload);
    } else {
      console.log("false");
      this.props.login(payload)
          .then(() => this.props.history.push("/user/dashboard"))
//          .catch(err => {
//            this.setState({errorMessage: err.response.data.message})
//      })
    }
    
  }
  
  onRegister(event) {
    event.preventDefault();
    this.props.register({registerFirstName:                                       this.state.registerFirstName,
                        registerLastName: this.state.registerLastName,
                        registerEmail: this.state.registerEmail,
                        registerPassword: this.state.registerPassword})
    .then(() => this.props.history.push("/user/dashboard"))
    .catch(err => {
      this.setState({errorMessage: err.response.data.message})
    })
  }
  
  onFakeRegister(event) {
    event.preventDefault();
    const post = {
      registerFirstName: this.state.registerFirstName,
      registerLastName: this.state.registerLastName,
      registerEmail: this.state.registerEmail,
      registerPassword: this.state.registerPassword,
    }
    
    fetch('http://10.12.185.9:3000/auth/signup', {
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
  
  onAxiosRegister(event) {
    event.preventDefault();
    const payload = {
      registerFirstName: this.state.registerFirstName,
      registerLastName: this.state.registerLastName,
      registerEmail: this.state.registerEmail,
      registerPassword: this.state.registerPassword,
    }
    
    axios.post('http://10.12.185.9:3000/auth/signup', payload)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }


  
  render() {
    return (
      <React.Fragment>
      {!this.props.admin && 
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
            <ContactUs />      
            {this.props.token ? (
              <React.Fragment>
              <Nav.Link className="navlink">
                <Link to="/user/dashboard">
                  <p>Dashboard</p>
                </Link>   
              </Nav.Link>
              <Nav.Link className="navlink" onClick={this.props.logout}>
                <p>Logout</p>  
              </Nav.Link>
              </React.Fragment>
            ) : (
            <React.Fragment>
              <Login />
              <Register />
            </React.Fragment>
            )}

          </Nav>
        </Navbar.Collapse>
      </Navbar>}

      </React.Fragment>
    )
  }
}

export default withContext(Navigation);