import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Navbar,Nav} from 'react-bootstrap';

class UserDashboard extends Component {
  handleDelete(event){
    event.preventDefault();

  }
  render() {
    return (

      <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">User Dashboard</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Create A New Ticket</Nav.Link>

          </Nav>
          <a href="/" style={{color:'#fff'}}>Log out</a>
        </Navbar>

        <Card shadow={5} style={{width: '450', margin: 'auto'}}>
          <CardActionArea>
            <CardMedia
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Payment Issue
              </Typography>
              <Typography component="p">
                Submission Time: 2019/04/01
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{display: 'inline-block'}}>
            <Button size="small" color="primary">
              VIEW TICKET
            </Button>
            <Button size="small" color="primary" onClick={this.handleDelete}>
              DELETE TICKET
            </Button>
          </CardActions>
      </Card>
      <hr />

      <Card shadow={5} style={{width: '450', margin: 'auto'}}>
        <CardActionArea>
          <CardMedia
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Complaint
            </Typography>
            <Typography component="p">
              Submission Time: 2019/04/01
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{display: 'inline-block'}}>
          <Button size="small" color="primary">
            VIEW TICKET
          </Button>
          <Button size="small" color="primary">
            DELETE TICKET
          </Button>
        </CardActions>
    </Card>
    <hr />

    <Card  shadow={5} style={{width: '450', margin: 'auto'}}>
      <CardActionArea style={{width: '450', margin: 'auto'}}>
        <CardMedia
          title="Contemplative Reptile"
        />
        <CardContent style={{width: '450', margin: 'auto'}}>
          <Typography gutterBottom variant="h5" component="h2">
            Job Application
          </Typography>
          <Typography component="p">
            Submission Time: 2019/04/01
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'inline-block', width: '450', margin: 'auto'}}>
        <Button size="small" color="primary">
          VIEW TICKET
        </Button>
        <Button size="small" color="primary">
          DELETE TICKET
        </Button>
      </CardActions>
  </Card>
      </div>
    )
  }
}

export default (UserDashboard);
