import React, { Component } from 'react';
import TableRow from '../dashboard/TableRow';

class TicketTable extends Component {
  render() {
    var onTicketTableUpdate = this.props.onTicketTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var Ticket = this.props.Tickets.map(function(Ticket) {
      if (Ticket.subject.indexOf(filterText) === -1) {
        return;
      }
      return (
        <TableRow
          onTicketTableUpdate={onTicketTableUpdate}
          Ticket={Ticket}
          onDelEvent={rowDel.bind(this)}
          key={Ticket.id}
        />
      );
    });

    return (
      <div>

        <table className="table table-bordered" style={{align:"center"}}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Submission Time</th>
            </tr>
          </thead>

          <tbody>{Ticket}</tbody>
        </table>
      </div>
    );
  }
}
export default (TicketTable);
