import React, { Component } from "react";
import { Form, Row } from "react-bootstrap";

function FieldGroup({ label, ...props }) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...props} />
    </Form.Group>
  );
}

export class FormInputs extends Component {
  render() {
    var row = [];
    for (var i = 0; i < this.props.ncols.length; i++) {
      row.push(
        <div key={i} className={this.props.ncols[i]}>
          <FieldGroup {...this.props.proprieties[i]} />
        </div>
      );
    }
    return <Row>{row}</Row>;
  }
}

export default FormInputs;
