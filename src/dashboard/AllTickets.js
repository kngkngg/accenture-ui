import TicketTable from '../dashboard/TicketTable';
import React, { Component } from 'react';

class AllTickets extends React.Component {
  constructor(props) {
    super(props);

    //  this.state.Tickets = [];
    this.state = {};
    this.state.filterText = "";
    this.state.Tickets = [
      {
        id: 1,
        time: "2019/04/01 23:59pm",
        subject: "payment issue"
      },
      {
        id: 2,
        time: "2019/04/01 23:59pm",
        subject: "general enquiry"
      },
      {
        id: 3,
        time: "2019/04/01 23:59pm",
        subject: "job application"
      },
      {
        id: 4,
        time: "2019/04/01 23:59pm",
        subject: "payment issue"
      },
      {
        id: 5,
        time: "2019/04/01 23:59pm",
        subject: "payment issue"
      },
      {
        id: 6,
        time: "2019/04/01 23:59pm",
        subject: "payment issue"
      }
    ];
  }
  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
  }
  handleRowDel(Ticket) {
    var index = this.state.Tickets.indexOf(Ticket);
    this.state.Tickets.splice(index, 1);
    this.setState(this.state.Tickets);
  }

  handleAddEvent(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var Ticket = {
      id: id,
      subject: "",
      time: "",
    };
    this.state.Tickets.push(Ticket);
    this.setState(this.state.Tickets);
  }

  handleTicketTable(evt) {
    var item = {
      id: evt.target.id,
      subject: evt.target.subject,
      value: evt.target.value
    };
    var Tickets = this.state.Tickets.slice();
    var newTickets = Tickets.map(function(Ticket) {
      for (var key in Ticket) {
        if (key == item.subject && Ticket.id == item.id) {
          Ticket[key] = item.value;
        }
      }
      return Ticket;
    });
    this.setState({ Tickets: newTickets });
    //  console.log(this.state.Tickets);
  }
  render() {
    return (
      <div>

        <TicketTable
          onTicketTableUpdate={this.handleTicketTable.bind(this)}
          onRowAdd={this.handleAddEvent.bind(this)}
          onRowDel={this.handleRowDel.bind(this)}
          Tickets={this.state.Tickets}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
export default (AllTickets);
