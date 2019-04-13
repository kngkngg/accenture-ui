import React, { Component } from 'react';
import TableRow from '../dashboard/TableRow';

class TicketTable extends Component {
  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function(product) {
      if (product.subject.indexOf(filterText) === -1) {
        return;
      }
      return (
        <TableRow
          onProductTableUpdate={onProductTableUpdate}
          product={product}
          onDelEvent={rowDel.bind(this)}
          key={product.id}
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

          <tbody>{product}</tbody>
        </table>
      </div>
    );
  }
}
export default (TicketTable);
