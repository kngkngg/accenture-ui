import React, { Component } from 'react';
import { withContext } from '../AuthContext';

import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import './admin-login.css';

// TODO: ADMIN LOGIN AND CSS

class AdminLogin extends Component {

  constructor(props, context) {
    super(props, context);

    this.onAdminLogin = this.onAdminLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);


    this.state = {
      errorMessage: '',
      adminLoginEmail: '',
      adminLoginPassword: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  onAdminLogin = (e) => {
    const payload = {
      adminLoginEmail: this.state.adminLoginEmail,
      adminLoginPassword: this.state.adminLoginPassword
    }
    e.preventDefault();
    this.props.adminLogin(payload);
    this.props.history.push('/admin/requests');
    //.then(() => this.props.history.push('/'))
    //.catch(err => {
    //  this.setState({errorMessage: err.response.data.message})
    //});
//    this.props.adminLogin(payload)
//      .then(res => console.log(res.json()))
//      .catch((err) => {
//        this.setState({errorMessage: err.response.data.error})
//    });

  }

  render() {
    return (
      <div className="admin-login-container">
        <p><span class="acn">acn</span>api admin login</p>
        <form onSubmit={this.onAdminLogin}>
          <Form.Row>
            <Col md={3} />
            <Form.Group as={Col} md="6" controlId="formAdminLoginEmail">
              <Form.Label>Admin Email</Form.Label>
              <Form.Control required
                            name="adminLoginEmail"
                            type="email"
                            placeholder="e.g. antonypym@accenture.com"
                            value={this.state.adminLoginEmail} onChange={this.handleChange}/>
            </Form.Group>
            <Col md={3} />
          </Form.Row>
          <Form.Row>
            <Col md={3} />
            <Form.Group as={Col} md="6" controlId="formAdminLoginPassword">
              <Form.Label>Admin Password</Form.Label>
              <Form.Control required
                          name="adminLoginPassword"
                          type="password"
                          value={this.state.adminLoginPassword}
                          onChange={this.handleChange}/>
            </Form.Group>
            <Col md={3} />
          </Form.Row>
          <Button variant="secondary" type="submit">
            Login
          </Button>
        </form>
      </div>
    )
  }
}

export default withContext(AdminLogin);
