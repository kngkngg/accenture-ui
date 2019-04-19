import TableCell from '../dashboard/TableCell';

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Modal } from 'react-bootstrap/';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
class TableRow extends React.Component {
  constructor() {
    super();

    this.handleShowTicketWindow = this.handleShowTicketWindow.bind(this);
    this.handleCloseTicketWindow = this.handleCloseTicketWindow.bind(this);

    this.state = {
      showTicketWindow: false,
      id: '',
      topic: '',
      response: '',
      multiline: '',
    }
  }

  handleCloseTicketWindow() {
    this.setState({ showTicketWindow: false });

  }

  handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };

  handleShowTicketWindow() {
    this.setState({ showTicketWindow: true });

  }


  onDelEvent() {
    this.props.onDelEvent(this.props.Ticket);
  }
  render() {
    return (
      <tr className="eachRow">
        <TableCell
          onTicketTableUpdate={this.props.onTicketTableUpdate}
          cellData={{
            type: "subject",
            value: this.props.Ticket.subject,
            id: this.props.Ticket.id
          }}
        />
        <TableCell
          onTicketTableUpdate={this.props.onTicketTableUpdate}
          cellData={{
            type: "time",
            value: this.props.Ticket.time,
            id: this.props.Ticket.id
          }}
        />

        <td className="del-cell">
          <Button onClick={this.handleShowTicketWindow} color="primary">
            VIEW TICKET
          </Button>
          <Modal size="lg" show={this.state.showTicketWindow} onHide={this.handleCloseTicketWindow}>
            <Modal.Header closeButton>
              <Modal.Title>Your Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Typography  align="center" variant="button" color= "primary" component="p">
                  Ticket Subject :
                </Typography>
                <Typography  align="center" component="p">
                  Payment Issue
                </Typography>
                <br />

                <Typography  align="center" variant="button" color= "primary"  component="p">
                  Submission Time:
                </Typography>
                <Typography   align="center" component="p">
                 2019/04/01
                </Typography>
                <br />

                <Typography  align="center" variant="button" color= "primary" component="p">
                  Ticket Details:
                </Typography>
                <Typography  align="center" style={{width:"700px", display:"inline-block"}} component="p">
                  I have some payment issues, I have some payment issues,
                  I have some payment issues, I have some payment issues,
                  I have some payment issues, I have some payment issues,
                  I have some payment issues, I have some payment issues,
                  I have some payment issues, I have some payment issues
                </Typography>
                <br />
                <hr />


                <Typography  align="center" variant="button" color= "primary"  component="p">
                  Admin's Reponse:
                </Typography>
                <Typography   align="center" style={{width:"700px", display:"inline-block"}} paragraph={true} component="p">
                Dear customer, I believe this issue is caused by...
                </Typography>
                <br />

              <Paper style={{width:"765px", display:"inline-block"}} align="center" elevation={3}>
                <br />
                <Typography variant="button" color= "primary" component="p">
                  Your Response :
                </Typography>

                <Typography component="p">
                  <form>
                      <TextField
                      id="standard-multiline-flexible"
                      label="Please Type Here"
                      style={{ margin: 50,width:650 }}
                      multiline

                      rowsMax="100"
                      value={this.state.multiline}
                      onChange={this.handleChange('multiline')}
                    />
                 </form>
                </Typography>
                <Button style={{left:"250px"}} variant="contained" color="primary" >
                  Send Response
                </Button>
                <br />
                <br />
                </Paper>

            </Modal.Body>

          </Modal>
        </td>
        <td className="del-cell">
          <Button
            color="primary"
            onClick={this.onDelEvent.bind(this)}
            className="del-btn"
          >CLOSE TICKET</Button>
        </td>
      </tr>
    );
  }
}
export default (TableRow);
