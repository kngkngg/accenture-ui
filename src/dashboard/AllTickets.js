import TicketTable from '../dashboard/TicketTable';
import React, { Component } from 'react';

class AllTickets extends React.Component {
  constructor(props) {
    super(props);

    //  this.state.products = [];
    this.state = {};
    this.state.filterText = "";
    this.state.products = [
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
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  }

  handleAddEvent(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      subject: "",
      time: "",
    };
    this.state.products.push(product);
    this.setState(this.state.products);
  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      subject: evt.target.subject,
      value: evt.target.value
    };
    var products = this.state.products.slice();
    var newProducts = products.map(function(product) {
      for (var key in product) {
        if (key == item.subject && product.id == item.id) {
          product[key] = item.value;
        }
      }
      return product;
    });
    this.setState({ products: newProducts });
    //  console.log(this.state.products);
  }
  render() {
    return (
      <div>

        <TicketTable
          onProductTableUpdate={this.handleProductTable.bind(this)}
          onRowAdd={this.handleAddEvent.bind(this)}
          onRowDel={this.handleRowDel.bind(this)}
          products={this.state.products}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
export default (AllTickets);
