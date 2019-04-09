import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Container, Row, Col } from "react-bootstrap";

import { Card } from "../../components/Card/Card.jsx";
import { StatsCard } from "../../components/StatsCard/StatsCard.jsx";
import { Tasks } from "../../components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar,
  legendLine
} from "../../variables/Variables.jsx";
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
    name: '1', GeneralEnquiry: 400, PaymentIssue: 240, JobApplication: 240, Others:300
  },
  {
    name: '2', GeneralEnquiry: 300, PaymentIssue: 139, JobApplication: 221,Others:300
  },
  {
    name: '3', GeneralEnquiry: 200, PaymentIssue: 342, JobApplication: 229,Others:300
  },
  {
    name: '4', GeneralEnquiry: 278, PaymentIssue: 390, JobApplication: 200,Others:300
  },
  {
    name: '5', GeneralEnquiry: 189, PaymentIssue: 480, JobApplication: 218,Others:300
  },
  {
    name: '6', GeneralEnquiry: 239, PaymentIssue: 380, JobApplication: 250,Others:300
  },
  {
    name: '7', GeneralEnquiry: 349, PaymentIssue: 430, JobApplication: 210,Others:300
  },
  {
    name: '1', GeneralEnquiry: 378, PaymentIssue: 240, JobApplication: 240,Others:300
  },
  {
    name: '2', GeneralEnquiry: 300, PaymentIssue: 139, JobApplication: 221,Others:300
  },
  {
    name: '3', GeneralEnquiry: 200, PaymentIssue: 250, JobApplication: 229,Others:300
  },
  {
    name: '4', GeneralEnquiry: 278, PaymentIssue: 390, JobApplication: 200,Others:300
  },
  {
    name: '5', GeneralEnquiry: 189, PaymentIssue: 480, JobApplication: 218,Others:300
  },
  {
    name: '6', GeneralEnquiry: 239, PaymentIssue: 380, JobApplication: 250,Others:300
  },
  {
    name: '7', GeneralEnquiry: 349, PaymentIssue: 430, JobApplication: 210,Others:300
  },
  {
    name: '1', GeneralEnquiry: 243, PaymentIssue: 240, JobApplication: 240,Others:300
  },
  {
    name: '2', GeneralEnquiry: 300, PaymentIssue: 139, JobApplication: 221,Others:300
  },
  {
    name: '3', GeneralEnquiry: 200, PaymentIssue: 234, JobApplication: 229,Others:300
  },
  {
    name: '4', GeneralEnquiry: 278, PaymentIssue: 390, JobApplication: 200,Others:300
  },
  {
    name: '5', GeneralEnquiry: 189, PaymentIssue: 480, JobApplication: 218,Others:300
  },
  {
    name: '6', GeneralEnquiry: 239, PaymentIssue: 380, JobApplication: 250,Others:300
  },
  {
    name: '7', GeneralEnquiry: 349, PaymentIssue: 430, JobApplication: 210,Others:300
  },
  {
    name: '1', GeneralEnquiry: 123, PaymentIssue: 240, JobApplication: 240,Others:300
  },
  {
    name: '2', GeneralEnquiry: 300, PaymentIssue: 139, JobApplication: 221,Others:300
  },
  {
    name: '3', GeneralEnquiry: 200, PaymentIssue: 236, JobApplication: 229,Others:300
  },
  {
    name: '4', GeneralEnquiry: 278, PaymentIssue: 390, JobApplication: 200,Others:300
  },
  {
    name: '5', GeneralEnquiry: 189, PaymentIssue: 480, JobApplication: 218,Others:300
  },
  {
    name: '6', GeneralEnquiry: 239, PaymentIssue: 380, JobApplication: 250,Others:300
  },
  {
    name: '7', GeneralEnquiry: 349, PaymentIssue: 430, JobApplication: 210,Others:300
  },
];
class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Tickets by Types"
                category="month performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                  <LineChart
                    width={1050}
                    height={250}
                    data={data}

                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <br/>
                    <Tooltip />
                    <Legend style={{marginTop:"2000px"}}/>
                    <Line strokeWidth={2} type="monotone" dataKey="PaymentIssue" stroke="#004DCF"   />
                    <Line strokeWidth={2} type="monotone" dataKey="GeneralEnquiry" stroke="#008B02" />
                    <Line strokeWidth={2} type="monotone" dataKey="JobApplication" stroke="#FCCB00" />
                    <Line strokeWidth={2} type="monotone" dataKey="Others" stroke="#B80000" />
                  </LineChart>
                  </div>
                }

              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Tickets by Urgency"
                category="day performance"
                stats="Updated 2 days ago"
                content={
                  <div id="chartPreferences" className="ct-chart ct-perfect-fourth"
                  >
                  <PieChart width={350} height={250}>
                    <Tooltip />
                    <Legend />
                      <Pie
                        data={datapie}
                        cx={150}
                        cy={100}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                      <Legend />
                        {
                          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                      </Pie>
                    </PieChart>
                  </div>
                }

              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Tickets by Urgency"
                category="day performance"
                stats="Updated 2 days ago"
                content={
                  <div id="chartPreferences" className="ct-chart ct-perfect-fourth"
                  >
                  <PieChart width={350} height={250}>
                    <Tooltip />
                    <Legend />
                      <Pie
                        data={datapie}
                        cx={150}
                        cy={100}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                      <Legend />
                        {
                          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                      </Pie>
                    </PieChart>
                  </div>
                }

              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Tickets by Urgency"
                category="day performance"
                stats="Updated 2 days ago"
                content={
                  <div id="chartPreferences" className="ct-chart ct-perfect-fourth"
                  >
                  <PieChart width={350} height={250}>
                    <Tooltip />
                    <Legend />
                      <Pie
                        data={datapie}
                        cx={150}
                        cy={100}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                      <Legend />
                        {
                          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                      </Pie>
                    </PieChart>
                  </div>
                }

              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
