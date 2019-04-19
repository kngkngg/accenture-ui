import React, { Component } from 'react';
import { withContext } from '../../AuthContext';
import axios from 'axios';
import { Nav, Modal, Button, Form, Row, Col, Image } from 'react-bootstrap';
import './request.css';

class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showMessage: false,
          replied: false,
          reply: '',
          convo:[]
        }
    
        //this.showRequests = this.showRequests.bind(this);
        this.handleShowMessage = this.handleShowMessage.bind(this);
        this.handleCloseMessage = this.handleCloseMessage.bind(this);
        this.handleReply = this.handleReply.bind(this);
        this.submitReply = this.submitReply.bind(this);
        this.retrieveConvo = this.retrieveConvo.bind(this);
        this.showConvoList = this.showConvoList.bind(this);
        this.displayDateTime = this.displayDateTime.bind(this);
      }
    
      handleCloseMessage() {
        this.setState({ showMessage: false });
      }
      
      handleShowMessage() {
        this.setState({ showMessage: true });
      }
    
      handleReply(e) {
        this.setState({
          reply: e.value
        })
      }

      displayDateTime(date) {
        var d = new Date(date),
            today = new Date(),
            date = d.getDate(),
            month = d.getMonth(),
            year = d.getFullYear(),
            months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            hour = d.getHours(),
            min = d.getMinutes(),
            today_date = today.getDate(),
            today_month = today.getMonth(),
            today_year = today.getFullYear()

        var time = hour + ":" + min;
        if (year === today_year && month == today_month && date === today_date) {
          return (
            <div className="convo-info">
              Today {time}
            </div>
          )
        } else if (year === today_year && month == today_month && date === today_date - 1) {
          return (
            <div className="convo-info">
              Yesterday {time}
            </div>
          )
        } else {
          return (
            <div className="convo-info">
              {months[month]} {date} {time}
            </div>
          )
        }
        
      }

      submitReply(e) {
        e.preventDefault();
        // var id = this.props.id;
        // var API_URL = '';
        // const payload = {reply: this.state.reply}
        // return axios.post((API_URL + id + '/message'), payload)
        //   .then(this.setState({replied: true}))
        var API_URL = "http://accenturesutd.herokuapp.com/tickets/1/admin/response";
        const payload = {message: this.state.reply}
        axios.post(API_URL, payload)
          .then(res => console.log(res))
          .catch(err => console.log(err))
        // fetch(API_URL, {
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify(payload)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(error => console.log(error))
          
      }

      retrieveConvo() {
        var API_URL = "http://accenturesutd.herokuapp.com/tickets/" + this.props.id + "/convo";
        return axios.get(API_URL)
          .then(({data}) => {
            this.setState({convo: data})
          })
      }

      showConvoList() {
        return (
          <React.Fragment>
            {this.state.convo.map(r =>(
              <Row>
                <Col xs={1}>
                  {(r.role === "admin") ? (
                    <Image className="accenture-logo-ticket" src={require("./admin_profile.jpg")}  roundedCircle />
                  ) : (
                    <Image className="accenture-logo-ticket" src={require("./avatar.png")}  roundedCircle />
                  )}
                </Col>
                <Col xs={11}>
                  <div className="title-container">
                    <div className="message-container"><span class="convo-name">{r.name}</span> <span>{this.displayDateTime(r.date)}</span> </div>
                    <div className="">{r.message}</div>
                  </div>
                </Col>
              </Row>
            ))}
          </React.Fragment>

        )
      }

      // componentDidUpdate() {
      //   this.retrieveConvo();
      // }

      componentDidMount() {
        this.retrieveConvo();
      }


      render() {
        return (
          <React.Fragment>
            {(!this.state.replied) &&
              <React.Fragment>
              <tr onClick={this.handleShowMessage} style={{cursor: 'pointer'}}>
                <td>{this.props.topic}</td>
                <td>{this.props.requester}</td>
                <td>{this.props.date_created}</td>
                <td>{this.props.user_email}</td>
                <td>{this.props.subject}</td>
              </tr>
            
            <Modal size="xl" show={this.state.showMessage} onHide={this.handleCloseMessage}>
            <Modal.Header closeButton>
              <Modal.Title>
                <Row>
                  <Col xs={2}>
                    <Image className="accenture-logo-ticket" src={require("./yellow.png")}  roundedCircle></Image>
                  </Col>
                  <Col xs={10}>
                    <div className="title-container">
                      <div className="subject-title">Subject: {this.props.subject}</div>
                      <div className="ticket-info">{this.props.date_created} <span>&#183;</span> {this.props.requester} via {this.props.user_email}</div>
                    </div>
                  </Col>
                </Row>         
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <p>{this.props.message}</p> */}
              <Row>
                <Col xs={1}>
                  <Image className="accenture-logo-ticket" src={require("./admin_profile.jpg")}  roundedCircle></Image>
                </Col>
                <Col xs={11}>
                  <form onSubmit={this.submitReply}>
                    <Form.Group controlId="reply">
                      <Form.Label>Reply</Form.Label>
                        <Form.Control required
                                      as="textarea"
                                      rows="3"
                                      name="reply"
                                      value={this.state.reply}
                                      onChange={this.handleReply}/>
                    </Form.Group>
                    <Button variant="primary"  type="submit">
                      Submit
                    </Button>
                 </form>
                </Col>
              </Row>
              {this.showConvoList()}
            
            </Modal.Body>
          </Modal>
          </React.Fragment> 
          }
          </React.Fragment>
        )
      }
}

export default withContext(Request);