import React, { Component } from 'react';
import { withContext } from '../AuthContext';

import { Nav } from 'react-bootstrap';
import { Modal } from 'react-bootstrap/';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class Register extends Component {
  constructor() {
    super();
    
    this.handleShowRegister = this.handleShowRegister.bind(this);
    this.handleCloseRegister = this.handleCloseRegister.bind(this);
    this.handleCHange = this.handleChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
    
    this.state = {
      showRegister: false,
      registerFirstName: '',
      registerLastName: '',
      registerEmail: '',
      registerPassword: '',
      errorMessage: ''
    }
  }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  
  handleCloseLogin() {
    this.setState({ showRegister: false });

  }
  
  handleShowLogin() {
    this.setState({ showRegister: true });
 
  }

  handleCloseRegister() {
    this.setState({ showRegister: false });

  }
  
  handleShowRegister() {
    this.setState({ showRegister: true });
 
  }

  onRegister = (e) => {
    e.preventDefault();
    const payload = {
      registerFirstName: this.state.registerFirstName,
      registerLastName: this.state.registerLastName,
      registerEmail: this.state.registerEmail,
      registerPassword: this.state.registerPassword
    }
    this.props.register(payload)
      .then(() => this.props.history.push("/user/dashboard"))
      .catch((err) => {
        this.setState({errorMessage: err.response.data.error})
      
    });
    console.log(this.state.errorMessage);
  }
  
  render() {
    return (
      <React.Fragment>
        <Nav.Link className="navlink" onClick={this.handleShowRegister}>
          <p>Register</p>
        </Nav.Link>
        <Modal size="lg" show={this.state.showRegister} onHide={this.handleCloseRegister}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onRegister}>
              <Form.Group controlId="formRegisterFirstName">
                <Form.Label>First Name</Form.Label>
                  <Form.Control required
                                name="registerFirstName"
                                type="name"
                                placeholder="e.g. Antony"
                                value={this.state.registerFirstName}
                                onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group controlId="formRegisterLastName">
                <Form.Label>Last Name</Form.Label>
                  <Form.Control required
                                name="registerLastName"
                                type="name"
                                placeholder="e.g. Pyn"
                                value={this.state.registerLastName}
                                onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group controlId="formRegisterEmail">
                <Form.Label>Your Email</Form.Label>
                  <Form.Control required
                                name="registerEmail"
                                type="email"
                                placeholder="e.g. anthony-pyn@accenture.com"
                                value={this.state.registerEmail}
                                onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group controlId="formRegisterPassword">
                <Form.Label>Your Password</Form.Label>
                  <Form.Control required
                                name="registerPassword"
                                type="password"
                                value={this.state.registerPassword}
                                onChange={this.handleChange}/>
              </Form.Group>
              <Button variant="secondary" onClick={this.handleCloseRegister} type="submit">
                Register
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    )
  }
}

export default withContext(Register);