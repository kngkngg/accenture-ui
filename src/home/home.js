import React, { Component } from 'react';
import './home.css';
import { Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Navigation from '../navigation/navigation.js';
class Home extends Component {
  render () {
    return (
      <React.Fragment>
      <Navigation />
        <div className="image-crop">

          <Image className="teamwork-image" src={require("./achievement-agreement-arms-1068523.jpg")} />
          <Carousel className="words-carousel">
            <Carousel.Item>
              <Carousel.Caption>
                <h4>Design Thinking</h4>
                <p>Ideation & Technology</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h4>Design Thinking</h4>
                <p>Ideation & Technology</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="image-aboutus">
          <Image className="aboutus-image" src={require("./aboutus.png")}>
          </Image>
        </div>
        <div className="image-business">
          <Image className="business-image" src={require("./business.png")}>
          </Image>
        </div>
        <div className="image-usecase">
          <Image className="usecase1-image" src={require("./usecasefirst.png")} />
          <Image className="usecase2-image" src={require("./usecasesecond.png")} />
          <Image className="usecase3-image" src={require("./usecasethird.png")} />
        </div>
        <div className="image-casestudy">
          <Image className="casestudy-image" src={require("./casestudy.png")} />
        </div>
        <div className="image-footer">
          <Image className="footer-image" src={require("./footer.png")} />
        </div>
        <div className="admin">
          <Nav.Link className="navlink" href="/admin_login">
            <p>Admin Login</p>
          </Nav.Link>
        </div>
      </React.Fragment>

    );
  }
}

export default Home;
