import React, { Component } from 'react';
import { withContext } from '../AuthContext';

import { Nav } from 'react-bootstrap';
import { Modal } from 'react-bootstrap/';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();
    
    this.handleShowLogin = this.handleShowLogin.bind(this);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
    this.handleShowError = this.handleShowError.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onLogin = this.onLogin.bind(this);

    
    this.state = {
      showLogin: false,
      loginEmail: "",
      loginPassword: "",
      errorMessage: ""
    }
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  
  handleCloseLogin() {
    this.setState({ showLogin: false });

  }
  
  handleShowLogin() {
    this.setState({ showLogin: true });
 
  }

  handleShowError() {
    if (this.state.errorMessage !== "") {
      this.setState({ showLogin: true })
    } else {
      this.setState({ showLogin: false })
    }
  }
  
  onLogin = (e) => {
    const data = {
      loginEmail: this.state.loginEmail,
      loginPassword: this.state.loginPassword
    }
    e.preventDefault();
    this.props.login(data)
      .then(res => console.log(res.json()))
      .then(() => this.props.history.push("/user/dashboard"))
      .catch((res) => {
        this.setState({errorMessage: res.response.data.error})
    });
    console.log(this.state.errorMessage);

    

  }
  
  render() {
    return (
      <React.Fragment>
        <Nav.Link className="navlink" onClick={this.handleShowLogin} >
          <p>Login</p>
        </Nav.Link>
        <Modal size="lg" show={this.state.showLogin} onHide={this.handleCloseLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onLogin}>
              <Form.Group controlId="formLoginEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control required
                              name="loginEmail"
                              type="email"
                              placeholder="e.g. antonypym@accenture.com"
                              value={this.state.loginEmail}
                              onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group controlId="formLoginPassword">
                <Form.Label>Your Password</Form.Label>
                <Form.Control required
                              name="loginPassword"
                              type="password"
                              value={this.state.loginPassword}
                              onChange={this.handleChange}/>
              </Form.Group>
              {
                this.state.errorMessage &&
                <p style={{color: "red"}}>{this.state.errorMessage}</p>
              } 
              <Button variant="secondary" onClick={this.handleShowError} type="submit">
                Submit
              </Button>
            </form>

          </Modal.Body>
        </Modal>
      </React.Fragment>
    )
  }
}

export default withContext(Login);