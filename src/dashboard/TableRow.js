import TableCell from '../dashboard/TableCell';

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class TableRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);
  }
  render() {
    return (
      <tr className="eachRow">
        <TableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "subject",
            value: this.props.product.subject,
            id: this.props.product.id
          }}
        />
        <TableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "time",
            value: this.props.product.time,
            id: this.props.product.id
          }}
        />

        <td className="del-cell">
          <Button href="/view_tickets" color="primary">
            VIEW TICKET
          </Button>
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
