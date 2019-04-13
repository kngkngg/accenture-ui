// import React, {Component} from 'react';
// import { Tab, Tabs, Table } from 'react-bootstrap';
// import { Modal, Button, Form } from 'react-bootstrap/';

// const RequestList= (props) => {
//     const options = props.results.map(r => (

//         <tr>
//           <td>{r.topic[0]}</td>
//           <td>{r.requester}</td>
//           <td>{r.date_submitted}</td>
//           <td>{r.email}</td>
//         </tr>
//         <Modal size="lg" show={this.state.showMessage} onHide={this.handleCloseMessage}>
//           <Modal.Header closeButton>
//             <Modal.Title>Message</Modal.Title>
//           </Modal.Header>
//         </Modal>
//     ))
//     return <tbody>{options}</tbody>
// }

// export default RequestList;

import React, { Component } from 'react';
import { Nav, Modal, Button, Form } from 'react-bootstrap';

class RequestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      reply: ''
    }

    this.showRequests = this.showRequests.bind(this);
    this.handleShowMessage = this.handleShowMessage.bind(this);
    this.handleCloseMessage = this.handleCloseMessage.bind(this);
    this.handleReply = this.handleReply.bind(this);
  }

  handleCloseMessage() {
    this.setState({ showMessage: false });

  }
  
  handleShowMessage() {
    this.setState({ showMessage: true });
    console.log("HI");
    
 
  }

  handleReply(e) {
    this.setState({
      reply: e.value
    })
  }

  showRequests(props) {
    return (
      <tbody>
        {this.props.results.map(r => (
          <React.Fragment>
          {/* <Button onClick={this.handleShowMessage}> */}
          <tr onClick={this.handleShowMessage} style={{cursor: 'pointer'}}>
            <td>{r.topic[0]}</td>
            <td>{r.requester}</td>
            <td>{r.date_submitted}</td>
            <td>{r.email}</td>
            <td>{r.message}</td>
          </tr>
          {/* </Button> */}
          <Modal size="lg" show={this.state.showMessage} onHide={this.handleCloseMessage}>
            <Modal.Header closeButton>
              <Modal.Title>Subject: {r.subject}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{r.message}</p>
            </Modal.Body>
            <form>
              <Form.Group controlId="reply">
                <Form.Label>Reply</Form.Label>
                <Form.Control required
                              name="reply"
                              value={this.state.reply}
                              onChange={this.handleReply}/>
              </Form.Group>
            </form>
          </Modal>
          </React.Fragment>
        ))}
      </tbody>
    )
  }

  render() {
    return (
      this.showRequests()
    )
  }
}

export default RequestList;