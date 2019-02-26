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
    this.handleChange = this.handleChange.bind(this);

    
    this.state = {
      showLogin: false,
      loginEmail: '',
      loginPassword: '',
      errorMessage: ''
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
  
  onLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push("/user/dashboard"))
      .catch(err => {
        this.setState({errorMessage: err.response.data.message})
    })
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
              <Button variant="secondary" onClick={this.handleCloseLogin} type="submit">
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