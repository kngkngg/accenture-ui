import React, { Component } from 'react';
import { withContext } from '../../AuthContext';
import axios from 'axios';
import { Nav, Modal, Button, Form, Row, Col, Image, Dropdown, ButtonGroup, Badge, OverlayTrigger, Card , Popover} from 'react-bootstrap';
import './request.css';

class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showMessage: false,
          reply: "",
          convo:[],
          status: 'open',
          buttonColor: 'dark',
          isDeleted: false
          
        }
    
        //this.showRequests = this.showRequests.bind(this);
        this.handleShowMessage = this.handleShowMessage.bind(this);
        this.handleCloseMessage = this.handleCloseMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitReply = this.submitReply.bind(this);
        this.retrieveConvo = this.retrieveConvo.bind(this);
        this.showConvoList = this.showConvoList.bind(this);
        this.displayDateTime = this.displayDateTime.bind(this);
        this.isNewMessage = this.isNewMessage.bind(this);
        this.changeButtonColor = this.changeButtonColor.bind(this);
        this.badgeColor = this.badgeColor.bind(this);
        this.capitalize = this.capitalize.bind(this);
        this.renderTooltip = this.renderTooltip.bind(this);
        this.restoreOrDelete = this.restoreOrDelete.bind(this);
        this.deleteRequest = this.deleteRequest.bind(this);
        this.restoreRequest = this.restoreRequest.bind(this);
        this.showStatus = this.showStatus.bind(this);
        this.showPriority = this.showPriority.bind(this);
        this.assignTicket = this.assignTicket.bind(this);
      }
    
      handleCloseMessage() {
        this.setState({ showMessage: false });
      }
      
      handleShowMessage() {
        this.setState({ showMessage: true });
      }
    
      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }

      changeButtonColor() {
        if (this.state.status === 'open') {
          this.setState({buttonColor: 'dark'})
        } else if (this.state.status === 'pending') {
          this.setState({buttonColor: 'info'})
        } else {
          this.setState({buttonColor: 'secondary'})
        }
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
            today_year = today.getFullYear(),
            today_hour = today.getHours(),
            today_min = today.getMinutes()

        var time = hour + ":" + min;
        if (year === today_year && month == today_month && date === today_date && hour === today_hour && min === today_min) {
          return (
            <div className="convo-time">
              less than a minute ago
            </div>
          )
        } else if (year === today_year && month == today_month && date === today_date && hour === today_hour) {
          return (
            <div className="convo-time">
              {today_hour - hour} mins ago
            </div>
          )
        
        } else if (year === today_year && month == today_month && date === today_date) {
          return (
            <div className="convo-time">
              Today {time}
            </div>
          )
        } else if (year === today_year && month == today_month && date === today_date - 1) {
          return (
            <div className="convo-time">
              Yesterday {time}
            </div>
          )
        } else {
          return (
            <div className="convo-time">
              {months[month]} {date} {time}
            </div>
          )
        }
        
      }

      isNewMessage(r) {
        if (r.id === this.state.convo[0].id) {
          return true;
        } else {
          return false;
        }
      }

      submitReply(e) {
        e.preventDefault();
        // var id = this.props.id;
        // var API_URL = '';
        // const payload = {reply: this.state.reply}
        // return axios.post((API_URL + id + '/message'), payload)
        //   .then(this.setState({replied: true}))
        var API_URL = "http://accenturesutd.herokuapp.com/tickets/" + this.props.id + '/admin/response';
        const payload = {message: this.state.reply,
                         status: this.state.status}
        console.log(this.state.reply)
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

      assignTicket() {
        const payload = ({admin_id: this.props.admin_id})
        var API_URL = "http://accenturesutd.herokuapp.com/tickets/" + this.props.id + "/assign";
        return axios.post(API_URL, payload);
        
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
              this.isNewMessage(r) ? (
                <React.Fragment>
                <div className="all-convo-label">
                  <span className="convo-name">All   </span>
                  <Badge pill variant="warning">
                    {this.state.convo.length} 
                  </Badge>
                </div> 
                <div className="message-container-new">
                <Row>
                  <Col xs={1}>
                    {(r.role === "admin") ? (
                      <Image className="accenture-logo-ticket" src={require("./admin_profile.jpg")}  roundedCircle />
                    ) : (
                      <Image className="accenture-logo-ticket" src={require("./avatar.png")}  roundedCircle />
                    )}
                  </Col>
                  <Col xs={11}>
                    <div className="convo-name">{r.name}  </div>
                    {this.displayDateTime(r.date)}
                    <div className="new">NEW</div>
                    <div className="assign">(assign)</div>
                    <div>{r.message}</div>            
                  </Col>
                </Row>
              </div>
              </React.Fragment>
              ) : (
                <div className="message-container">
                <Row>
                  <Col xs={1}>
                    {(r.role === "admin") ? (
                      <Image className="accenture-logo-ticket" src={require("./admin_profile.jpg")}  roundedCircle />
                    ) : (
                      <Image className="accenture-logo-ticket" src={require("./avatar.png")}  roundedCircle />
                    )}
                  </Col>
                  <Col xs={11}>
                    <div className="convo-name">{r.name}  </div>
                    {this.displayDateTime(r.date)}
                    <div className="assign">(assign)</div>
                    <div>{r.message}</div>            
                  </Col>
                </Row>
              </div>
              )

            ))}
          </React.Fragment>

        )
      }

      badgeColor(r) {
        if (r === 'open') {
          return <Badge variant="danger">O</Badge>
        } else if (r === 'pending') {
          return <Badge variant="info">P</Badge>
        } else {
          return <Badge variant="secondary">S</Badge>
        }
      }

      capitalize(string) {
        var firstLetter = string.charAt(0);
        var uppercaseFirstLetter = string.charAt(0).toUpperCase();
        return uppercaseFirstLetter + string.slice(1);
      }

      showStatus(status) {
        if (status === 'open') {
          return <Badge variant="danger">Open</Badge>
        } else if (status === 'pending') {
          return <Badge variant="info">Pending</Badge>
        } else if (status === 'solved') {
          return <Badge variant="secondary">Solved</Badge>
        } else {
          return <Badge variant="dark">Deleted</Badge>
        }
      }

      showPriority(priority) {
        if (priority === true) {
          return 'Urgent'
        } else {
          return 'Normal'
        }
      }

      componentDidUpdate() {
        this.retrieveConvo();
      }

      componentDidMount() {
        this.retrieveConvo();
      }

      renderTooltip() {
        // var name = this.state.convo[0].name
        return (
          <div className="popup">
            <Card style={{ width: '21rem' }}>
              <Card.Body>
                <Card.Title style={{fontSize: '16px', paddingBottom: '5px'}}>{this.showStatus(this.props.status)} Ticket #{this.props.id} ({this.showPriority(this.props.priority)})</Card.Title>
                <Card.Subtitle style={{fontSize: '14px', fontWeight: 600}} className="mb-2 text-muted">{this.props.subject}</Card.Subtitle>
                <Card.Text>
                  <div style={{fontSize: '15px', fontWeight: 400}}>{this.props.message}</div>
                  <br />
                  <div style={{fontSize: '15px', color:'#2F3941'}}>Latest comment</div>
                  <hr />
                  <div style={{fontWeight: 600, fontSize: '14px'}}>
                    {/* {name} */}
                  </div>
                  <div style={{fontWeight: 400, fontSize: '14px'}}>
                    {/* {this.state.convo[0].message}  */}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>          
          </div> 
        )
      }

      restoreOrDelete() {
        if (this.props.status === "deleted") {
          return (
            <div>
              <Button size="sm" variant="success" onClick={this.restoreRequest}>Restore</Button>
              
            </div>
          )
        } else {
            return (
              <div>
                <Button size="sm" variant="danger" onClick={this.deleteRequest}>Delete</Button>
              </div>
            )
        }
      }

      deleteRequest() {
        this.setState({ isDeleted: true})
        return axios.post("http://accenturesutd.herokuapp.com/tickets/" + this.props.id + "/delete")      
      }

      restoreRequest() {
        this.setState({ isDeleted: false})
        return axios.post("http://accenturesutd.herokuapp.com/tickets/" + this.props.id + "/restore")      
      }


      render() {
        return (
          <React.Fragment>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={this.renderTooltip}
          >  
          <tr onClick={this.handleShowMessage} style={{cursor: 'pointer'}}>
            <td><Form.Check type="checkbox" /></td>
            <td>{this.badgeColor(this.props.status)}</td>
            <td>{this.props.subject}</td>
            <td>{this.props.requester}</td>
            <td>{this.props.date_created}</td>
            <td>{this.props.topic}</td>
            <td>{this.props.priority}</td>
          </tr>
          </OverlayTrigger>
              
            
            <Modal size="xl" show={this.state.showMessage} onHide={this.handleCloseMessage}>
            <div className="convo-content-container">
              <Row>
                <Col xs={3}>
                  <div className="sidebar-container">
                    <div style={{display: 'block'}}>
                      <div className="convo-sidebar-title" style={{float: 'left', paddingTop: '5px'}}>Assignee</div>
                      <div className="convo-sidebar-click" style={{ float: 'right', paddingTop: '5px'}}><a onClick={this.assignTicket()}>take it</a></div>
                    </div>
                    <Form.Control size="sm" as="select">
                      <option>Kenneth Ng</option>
                    </Form.Control>
                    <div style={{display: 'block', paddingTop: '20px'}}>
                      <div className="convo-sidebar-title" style={{float: 'left', paddingTop: '5px'}}>CCs</div>
                      <div className="convo-sidebar-click" style={{ float: 'right', paddingTop: '5px'}}>cc me</div>
                    </div>
                    <Form.Control size="sm" placeholder="search name or contact info" />
                    <hr/>
                    <div className="convo-sidebar-title">Tags</div>
                    <Form.Control size="sm" />
                    <div className="convo-sidebar-title">Type</div>
                    <Form.Control size="sm" as="select" defaultValue="Incident">
                      <option>-</option>
                      <option>Question</option>
                      <option>Incident</option>
                      <option>Problem</option>
                      <option>Task</option>
                    </Form.Control>
                    <div className="convo-sidebar-title">Priority</div>
                    <Form.Control size="sm" as="select">
                      <option>Normal</option>
                      <option>Urgent</option>
                    </Form.Control>

                  </div>
                </Col>
                <Col xs={9}>
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
                        {this.restoreOrDelete()}
                      
                    </div>
                  </Col>
                </Row>         
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
              {/* <p>{this.props.message}</p> */}
              <Row>
                <Col xs={1}>
                  <Image className="accenture-logo-ticket" src={require("./admin_profile.jpg")}  roundedCircle></Image>
                </Col>
                <Col xs={11}>
                  <form onSubmit={this.submitReply}>
                    <Form.Group controlId="reply">
                      <Form.Label>Public Reply</Form.Label>
                        <Form.Control required
                                      as="textarea"
                                      rows="6"
                                      name="reply"
                                      value={this.state.reply}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    {/* <div className="all-convo-label">
                      <Badge pill variant="primary">
                        {this.state.convo.length} 
                      </Badge>
                    </div> */}
                    <div className="convo-submit-button">
                      <Dropdown 
                      as={ButtonGroup}
                      activeKey={this.state.status}
                      onSelect={key => this.setState({ status: key}, this.changeButtonColor)}
                      >
                        <Button variant={this.state.buttonColor} type="submit">
                  Submit as <b>{this.capitalize(this.state.status)}</b>
                        </Button>
                        <Dropdown.Toggle split variant={this.state.buttonColor} id="dropdown-split-basic" />
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="open"><Badge variant="danger">O</Badge>  Submit as <b>Open</b></Dropdown.Item>
                          <Dropdown.Item eventKey="pending"><Badge variant="info">P</Badge> Submit as <b>Pending</b></Dropdown.Item>
                          <Dropdown.Item eventKey="solved"><Badge variant="secondary">S</Badge> Submit as <b>Solved</b></Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                 </form>
                </Col>
              </Row>
              {this.showConvoList()}
            
            </Modal.Body>
                </Col>
              </Row>
            </div>

          </Modal>
          </React.Fragment> 
        )
      }
}

export default withContext(Request);