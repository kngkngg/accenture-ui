
import React, { Component } from 'react';
class TableCell extends React.Component {
  render() {
    return (
      <td>
        <input

          disable
          style={{align:"center", border: "none",
          "vertical-align":"-webkit-baseline-middle",
          width:"fit-content", "text-align":"center"}}
          type="text"
          subject={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onProductTableUpdate}
        />
      </td>
    );
  }
}
export default (TableCell);
