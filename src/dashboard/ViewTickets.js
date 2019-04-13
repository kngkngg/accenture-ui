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
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

class ViewTickets extends Component {
  state = {

   multiline: '',
 };
  handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };
  render() {
    return (
    <div>
      <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">User Dashboard</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Create A New Ticket</Nav.Link>

          </Nav>
          <a href="/" style={{color:'#fff'}}>Log out</a>
        </Navbar>
        <br />
       <a href="/user/dashboard"> Go Back</a>

     </div>
     <br />
     <div>
      <Paper style={{width:"1000px", display:"inline-block"}} align="center" elevation={3}>
        <br />
        <Typography variant="button" color= "primary" component="p">
          Ticket Subject :
        </Typography>
        <Typography component="p">
          Payment Issue
        </Typography>
        <br />

        <Typography variant="button" color= "primary"  component="p">
          Submission Time:
        </Typography>
        <Typography   component="p">
         2019/04/01
        </Typography>
        <br />

        <Typography variant="button" color= "primary" component="p">
          Ticket Details:
        </Typography>
        <Typography  style={{width:"700px", display:"inline-block"}} component="p">
          I have some payment issues, I have some payment issues,
          I have some payment issues, I have some payment issues,
          I have some payment issues, I have some payment issues,
          I have some payment issues, I have some payment issues,
          I have some payment issues, I have some payment issues
        </Typography>
        <br />
        <hr />


        <Typography variant="button" color= "primary"  component="p">
          Admin's Reponse:
        </Typography>
        <Typography  style={{width:"700px", display:"inline-block"}} paragraph={true} component="p">
        Dear customer, I believe this issue is caused by...
        </Typography>
        <br />
      </Paper>
        <br />
        <br />

      <Paper style={{width:"1000px", display:"inline-block"}} align="center" elevation={3}>
        <br />
        <Typography variant="button" color= "primary" component="p">
          Your Response :
        </Typography>

        <Typography component="p">
          <form>
              <TextField
              id="standard-multiline-flexible"
              label="Please Type Here"
              style={{ margin: 50,width:800 }}
              multiline

              rowsMax="100"
              value={this.state.multiline}
              onChange={this.handleChange('multiline')}
            />
         </form>
        </Typography>
        <Button style={{left:"300px"}} variant="contained" color="primary" >
          Send Response
        </Button>
        <br />
        <br />
        <br />

      </Paper>
    </div>
    </div>
    )
  }
}

export default (ViewTickets);
