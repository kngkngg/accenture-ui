import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Card from "../../components/Card/Card.jsx";
import { thArray, tdArray } from "../../variables/Variables.jsx";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Subject", field: "subject", filter: true, sortable: true, cellStyle: {fontSize:14,'background-color': '#EFF1F4'}
      }, {
        headerName: "Requester", field: "requester", filter: true, sortable: true, cellStyle: {fontSize:14,'background-color': '#EFF1F4'}
      }, {
        headerName: "Requested", field: "requested", filter: true, sortable: true, cellStyle: {fontSize:14,'background-color': '#EFF1F4'}
      },{
        headerName: "Type", field: "type", filter: true, sortable: true, cellStyle: {fontSize:14,'background-color': '#EFF1F4'}
      },{
        headerName: "Priority", field: "priority", filter: true, sortable: true, cellStyle: { fontSize:14,'background-color': '#EFF1F4'}
      }],
      rowData1: [{
        subject: "Issue", requester: "Jake", requested: "23/02/2019 13:00", type:"Incident",priority:"normal"
      }, {
        subject: "Complaint", requester: "Amy", requested: "23/02/2019 08:00", type:"Incident",priority:"urgent"
      }, {
        subject: "Request", requester: "Terry", requested: "21/02/2019 23:00", type:"Incident",priority:"urgent"
      },{
        subject: "Issue", requester: "Charles", requested: "20/02/2019 12:00", type:"Incident",priority:"normal"
      }],

      rowData2: [{
        subject: "Job Application", requester: "ISTD", requested: "23/02/2019 13:00", type:"Incident",priority:"normal"
      }, {
        subject: "Issue", requester: "ESD", requested: "23/02/2019 08:00", type:"Incident",priority:"urgent"
      }, {
        subject: "Complaint", requester: "EPD", requested: "21/02/2019 23:00", type:"Incident",priority:"urgent"
      },{
        subject: "Issue", requester: "ASD", requested: "20/02/2019 12:00", type:"Incident",priority:"normal"
      }],
      rowData3: [{
        subject: "Complaint", requester: "SUTD", requested: "23/02/2019 13:00", type:"Incident",priority:"normal"
      }, {
        subject: "Request", requester: "NUS", requested: "23/02/2019 08:00", type:"Incident",priority:"urgent"
      }, {
        subject: "Issue", requester: "NTU", requested: "21/02/2019 23:00", type:"Incident",priority:"urgent"
      },{
        subject: "Issue", requester: "SMU", requested: "20/02/2019 12:00", type:"Incident",priority:"normal"
      }]
    }
  }

  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>

            <Col md={12}>
              <Tabs style={{width:"1002px",display:"inline-block",marginLeft:50,fontSize:16}}>
                <TabList>
                  <Tab style={{width:"167px"}}>Unsolved Tickets</Tab>
                  <Tab style={{width:"167px"}}>New Tickets</Tab>
                  <Tab style={{width:"167px"}}>Updated Tickets</Tab>
                  <Tab style={{width:"167px"}}>Pending Tickets</Tab>
                  <Tab style={{width:"167px"}}>Closed Tickets</Tab>
                  <Tab style={{width:"167px"}}>Deleted Tickets</Tab>
                </TabList>

                <TabPanel>
                <div
          				className="ag-theme-balham"
          				style={{
          					height: '500px',
          					width: '1000px'

          				}}
          			>
          				<AgGridReact
          					columnDefs={this.state.columnDefs}
          					rowData={this.state.rowData1}>
          				</AgGridReact>
               </div>
                </TabPanel>
                <TabPanel>
                  <div
                    className="ag-theme-balham"
                    style={{
                      height: '500px',
                      width: '1000px'
                    }}
                  >
                    <AgGridReact
                      columnDefs={this.state.columnDefs}
                      rowData={this.state.rowData2}>
                    </AgGridReact>
                 </div>
                </TabPanel>
                <TabPanel>
                  <div
                    className="ag-theme-balham"
                    style={{
                      height: '500px',
                      width: '1000px'
                    }}
                  >
                    <AgGridReact
                      columnDefs={this.state.columnDefs}
                      rowData={this.state.rowData3}>
                    </AgGridReact>
                 </div>
                </TabPanel>
                <TabPanel>
                  <div
                    className="ag-theme-balham"
                    style={{
                      height: '500px',
                      width: '1000px'
                    }}
                  >
                    <AgGridReact
                      columnDefs={this.state.columnDefs}
                      rowData={this.state.rowData1}>
                    </AgGridReact>
                 </div>
                </TabPanel>
                <TabPanel>
                  <div
                    className="ag-theme-balham"
                    style={{
                      height: '500px',
                      width: '1000px'
                    }}
                  >
                    <AgGridReact
                      columnDefs={this.state.columnDefs}
                      rowData={this.state.rowData2}>
                    </AgGridReact>
                 </div>
                </TabPanel>
                <TabPanel>
                  <div
                    className="ag-theme-balham"
                    style={{
                      height: '500px',
                      width: '1000px'
                    }}
                  >
                    <AgGridReact
                      columnDefs={this.state.columnDefs}
                      rowData={this.state.rowData3}>
                    </AgGridReact>
                 </div>
                </TabPanel>
              </Tabs>

            </Col>


          </Row>
        </Container>
      </div>
    );
  }
}

export default TableList;
