import React, { Component } from 'react';
import { withContext } from '../../AuthContext';
import axios from 'axios';
import {Navbar,Nav} from 'react-bootstrap';

import './dashboard.css';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { StatsCard } from "../components/StatsCard/StatsCard.jsx";
import { Cards } from "../components/Card/Card.jsx";

import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, Sector, Cell,
  } from 'recharts';
const datapie = [
      { name: 'Pending', value: 400 },
      { name: 'Closed', value: 300 },
      { name: 'Overdue', value: 300 },
      { name: 'New', value: 200 },
    ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
      cx, cy, midAngle, innerRadius, outerRadius, percent, index,
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
const data = [
    {
      name: 'Jan', NewTickets: 400, UrgentTickets: 240, UnsolvedTickets: 240, UnassignedTicketss:300
    },
    {
      name: 'Feb', NewTickets: 300, UrgentTickets: 139, UnsolvedTickets: 221, UnassignedTickets:300
    },
    {
      name: 'Mar', NewTickets: 200, UrgentTickets: 342, UnsolvedTickets: 229, UnassignedTickets:300
    },
    {
      name: 'Apr', NewTickets: 278, UrgentTickets: 390, UnsolvedTickets: 200, UnassignedTickets:300
    },
    {
      name: 'May', NewTickets: 189, UrgentTickets: 480, UnsolvedTickets: 218, UnassignedTickets:300
    },
    {
      name: 'Jun', NewTickets: 239, UrgentTickets: 380, UnsolvedTickets: 250, UnassignedTickets:300
    },
    {
      name: 'Jul', NewTickets: 349, UrgentTickets: 430, UnsolvedTickets: 210, UnassignedTickets:300
    },
    {
      name: 'Aug', NewTickets: 378, UrgentTickets: 240, UnsolvedTickets: 240, UnassignedTickets:300
    },
    {
      name: 'Sep', NewTickets: 300, UrgentTickets: 139, UnsolvedTickets: 221, UnassignedTickets:300
    },
    {
      name: 'Oct', NewTickets: 200, UrgentTickets: 250, UnsolvedTickets: 229, UnassignedTickets:300
    },
    {
      name: 'Nov', NewTickets: 278, UrgentTickets: 390, UnsolvedTickets: 200, UnassignedTickets:300
    },
    {
      name: 'Dec', NewTickets: 189, UrgentTickets: 480, UnsolvedTickets: 218, UnassignedTickets:300
    },
    {
      name: 'Jan', NewTickets: 239, UrgentTickets: 380, UnsolvedTickets: 250, UnassignedTickets:300
    },
    {
      name: 'Feb', NewTickets: 349, UrgentTickets: 430, UnsolvedTickets: 210, UnassignedTickets:300
    },
    {
      name: 'Mar', NewTickets: 243, UrgentTickets: 240, UnsolvedTickets: 240, UnassignedTickets:300
    },
    {
      name: 'Apr', NewTickets: 300, UrgentTickets: 139, UnsolvedTickets: 221, UnassignedTickets:300
    },
    {
      name: 'May', NewTickets: 200, UrgentTickets: 234, UnsolvedTickets: 229, UnassignedTickets:300
    },
    {
      name: 'Jun', NewTickets: 278, UrgentTickets: 390, UnsolvedTickets: 200, UnassignedTickets:300
    },
    {
      name: 'Jul', NewTickets: 189, UrgentTickets: 480, UnsolvedTickets: 218, UnassignedTickets:300
    },
    {
      name: 'Aug', NewTickets: 239, UrgentTickets: 380, UnsolvedTickets: 250, UnassignedTickets:300
    },
    {
      name: 'Sep', NewTickets: 349, UrgentTickets: 430, UnsolvedTickets: 210, UnassignedTickets:300
    },
    {
      name: 'Oct', NewTickets: 123, UrgentTickets: 240, UnsolvedTickets: 240, UnassignedTickets:300
    },
    {
      name: 'Nov', NewTickets: 300, UrgentTickets: 139, UnsolvedTickets: 221, UnassignedTickets:300
    },
    {
      name: 'Dec', NewTickets: 200, UrgentTickets: 236, UnsolvedTickets: 229, UnassignedTickets:300
    },
    {
      name: 'Jan', NewTickets: 278, UrgentTickets: 390, UnsolvedTickets: 200, UnassignedTickets:300
    },
    {
      name: 'Feb', NewTickets: 189, UrgentTickets: 480, UnsolvedTickets: 218, UnassignedTickets:300
    },
    {
      name: 'Mar', NewTickets: 239, UrgentTickets: 380, UnsolvedTickets: 250, UnassignedTickets:300
    },
    {
      name: 'Apr', NewTickets: 349, UrgentTickets: 430, UnsolvedTickets: 210, UnassignedTickets:300
    },
  ];

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            newRequests: '',
            unsolvedRequests: '',
            unassignedRequests: '',
            urgentRequests: '',
          
        };

        this.retrieveDetails = this.retrieveDetails.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.retrieveDetails();
    }

    retrieveDetails() {
        var API_URL = 'http://accenturesutd.herokuapp.com/admin/4/dashboard';
        return axios.get(API_URL)
            .then(({data}) => {
                this.setState({
                    name: data.name,
                    newRequests: data.new,
                    unsolvedRequests: data.unsolved,
                    unassignedRequests: data.unassigned,
                    urgentRequests: data.urgent
                });
            })
    }

    render() {
        return (
          <React.Fragment>
            {(!this.state.loading) ? 
          (<React.Fragment>
          <div>
          <Navbar bg="dark" variant="dark" >
              <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/admin/requests">View Tickets</Nav.Link>
                <Nav.Link href="/admin/dashboard">View Statistics</Nav.Link>

              </Nav>
              <a href="/" style={{color:'#fff'}}>Log out</a>
            </Navbar>
          </div>
            <div className="dashboard-container">
              <h3>Welcome, {this.state.name}</h3>
              <p>Here are your tickets for today.</p>
                <div className="tickets-info">
                  <Row>
                    <Col md={3} xs={6} sm={3}>
                      <div className="ticket-info">
                        <Card style={{ width: '19rem'}} >
                          <Row>
                            <br/>
                            <Col xs={5}>
                              <Image className="ticket-card-image" src={require("./light-bulb.png")} style={{ width: '85px'}} ></Image>
                            </Col>
                            <Col xs={7}>
                              <div className="ticket-card-info">
                                <div style={{ color: 'black' }} className="ticket-card-category">New</div>
                                <div style={{ color: 'black' }} className="ticket-card-number">{this.state.newRequests}</div>                         
                              </div>
                            </Col>
                          </Row>
                          <hr/>
                          <div style={{ padding : '0 0 10px 10px'}}>
                            <span style={{display: 'inline'}}><FontAwesomeIcon icon={faSyncAlt} /></span>
                            <div style={{padding : '0 0 10px 10px', display: 'inline'}}>Updated now</div>
                          </div>
                        </Card>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={3}>
                      <div className="ticket-info">
                        <Card style={{ width: '19rem'}} >
                          <Row>
                            <br/>
                            <Col xs={5}>
                              <Image className="ticket-card-image" src={require("./medal.png")} style={{ width: '85px'}} ></Image>
                            </Col>
                            <Col xs={7}>
                              <div className="ticket-card-info">
                                <div style={{ color: 'black' }} className="ticket-card-category">Urgent</div>
                                <div style={{ color: 'black' }} className="ticket-card-number">{this.state.urgentRequests}</div>                         
                              </div>
                            </Col>
                          </Row>
                          <hr/>
                          <div style={{ padding : '0 0 10px 10px'}}>
                            <span style={{display: 'inline'}}><FontAwesomeIcon icon={faCalendar} /></span>
                            <div style={{padding : '0 0 10px 10px', display: 'inline'}}>Last day</div>
                          </div>
                        </Card>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={3}>
                      <div className="ticket-info">
                        <Card style={{ width: '19rem'}} >
                          <Row>
                            <br/>
                            <Col xs={5}>
                              <Image className="ticket-card-image" src={require("./target.png")} style={{ width: '85px'}} ></Image>
                            </Col>
                            <Col xs={7}>
                              <div className="ticket-card-info">
                                <div style={{ color: 'black' }} className="ticket-card-category">Unsolved</div>
                                <div style={{ color: 'black' }} className="ticket-card-number">{this.state.unsolvedRequests}</div>                         
                              </div>
                            </Col>
                          </Row>
                          <hr/>
                          <div style={{ padding : '0 0 10px 10px'}}>
                            <span style={{display: 'inline'}}><FontAwesomeIcon icon={faClock} /></span>
                            <div style={{padding : '0 0 10px 10px', display: 'inline'}}>Updated in the last hour</div>
                          </div>
                        </Card>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={3}>
                    <div className="ticket-info">
                        <Card style={{ width: '19rem'}} >
                          <Row>
                            <br/>
                            <Col xs={5}>
                              <Image className="ticket-card-image" src={require("./line-chart.png")} style={{ width: '85px'}} ></Image>
                            </Col>
                            <Col xs={7}>
                              <div className="ticket-card-info">
                                <div style={{ color: 'black' }} className="ticket-card-category">Unassigned</div>
                                <div style={{ color: 'black' }} className="ticket-card-number">{this.state.unassignedRequests}</div>                         
                              </div>
                            </Col>
                          </Row>
                          <hr/>
                          <div style={{ padding : '0 0 10px 10px'}}>
                            <span style={{display: 'inline'}}><FontAwesomeIcon icon={faSyncAlt} /></span>
                            <div style={{padding : '0 0 10px 10px', display: 'inline'}}>Updated now</div>
                          </div>
                        </Card>
                      </div>
                    </Col>
                  </Row>
                </div>

                <Card className="graph-card">
                  <div style={{fontSize: '20px', fontWeight:'300'}}>Tickets by Types</div>
                  <div style={{fontSize: '15px', fontWeight:'300', marginBottom: '30px'}}>month performance</div>
                  <LineChart
                    width={1250}
                    height={350}
                    data={data}

                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <br/>
                    <Tooltip />
                    <Legend style={{marginTop:"2000px"}}/>
                    <Line strokeWidth={2} type="monotone" dataKey="NewTickets" stroke="#004DCF"   />
                    <Line strokeWidth={2} type="monotone" dataKey="UrgentTickets" stroke="#008B02" />
                    <Line strokeWidth={2} type="monotone" dataKey="UnsolvedTickets" stroke="#FCCB00" />
                    <Line strokeWidth={2} type="monotone" dataKey="UnassignedTickets" stroke="#B80000" />
                  </LineChart>
                  <hr/>
                  <div>
                    <span style={{display: 'inline'}}><FontAwesomeIcon icon={faSyncAlt} /></span>
                    <div style={{padding : '0 0 10px 10px', display: 'inline'}}>Updated 3 mins ago</div>
                  </div>
                </Card>
                <div className="tickets-info" style={{marginTop: '30px'}}>
                <Row>
                  <Col xs={3}>
                    <Card style={{ width: '19rem'}} >
                      <Row>
                        <br/>
                        <Col xs={7}>
                          <div className="additional-info">
                            <div style={{ color: 'black' }} className="ticket-card-category">Macros</div>
                            <div style={{ color: 'green' }} className="ticket-card-number">4</div>                         
                          </div>
                        </Col>
                      </Row>
                      <hr/>
                      <div style={{ padding : '0 0 10px 10px'}}>
                        <Row>
                          <Col xs={9}> 
                            <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>Used today</div>
                          </Col>
                          <Col xs={3}>
                          <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>2</div>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={9}> 
                            <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>Updated today</div>
                          </Col>
                          <Col xs={3}>
                          <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>1</div>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={3}>
                  <Card style={{ width: '19rem'}} >
                      <Row>
                        <br/>
                        <Col xs={7}>
                          <div className="additional-info">
                            <div style={{ color: 'black' }} className="ticket-card-category">Triggers</div>
                            <div style={{ color: 'green' }} className="ticket-card-number">7</div>                         
                          </div>
                        </Col>
                      </Row>
                      <hr/>
                      <div style={{ padding : '0 0 10px 10px'}}>
                        <Row>
                          <Col xs={9}> 
                            <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>Used today</div>
                          </Col>
                          <Col xs={3}>
                          <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>1</div>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={9}> 
                            <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>Updated today</div>
                          </Col>
                          <Col xs={3}>
                          <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>0</div>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={3}>
                  <Card style={{ width: '19rem'}} >
                      <Row>
                        <br/>
                        <Col xs={7}>
                          <div className="additional-info">
                            <div style={{ color: 'black' }} className="ticket-card-category">Automations</div>
                            <div style={{ color: 'green' }} className="ticket-card-number">1</div>                         
                          </div>
                        </Col>
                      </Row>
                      <hr/>
                      <div style={{ padding : '0 0 10px 10px'}}>
                        <Row>
                          <Col xs={9}> 
                            <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>Used today</div>
                          </Col>
                          <Col xs={3}>
                          <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>2</div>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={9}> 
                            <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>Updated today</div>
                          </Col>
                          <Col xs={3}>
                          <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>3</div>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={3}>
                  <Card style={{ width: '19rem'}} >
                      <Row>
                        <br/>
                        <Col xs={7}>
                          <div className="additional-info">
                            <div style={{ color: 'black' }} className="ticket-card-category">Views</div>
                            <div style={{ color: 'green' }} className="ticket-card-number">8</div>                         
                          </div>
                        </Col>
                      </Row>
                      <hr/>
                      <div style={{ padding : '0 0 10px 10px'}}>
                        <Row>
                          <Col xs={9}> 
                            <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>Used today</div>
                          </Col>
                          <Col xs={3}>
                          <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>2</div>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={9}> 
                            <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>Updated today</div>
                          </Col>
                          <Col xs={3}>
                          <div style={{padding : '0 0 10px 10px', lineHeight: 1, fontSize: '14px'}}>0</div>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </Col>
                </Row>
                </div>
            </div>
            </React.Fragment>) : ( 
              <React.Fragment>
                <p>Loading</p>
              </React.Fragment>
            )
            }
            </React.Fragment>
        )
    }
}

export default withContext(Dashboard);
