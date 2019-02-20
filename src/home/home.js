import React, { Component } from 'react';
import './home.css';

import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

class Home extends Component {
  render () {
    return (
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

    );
  }
}

export default Home;