import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  CarouselItem,
  Carousel,
  // CarouselControl,
  // CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import Styled from "styled-components";
import { Link } from "react-router-dom";

import WhatIs from "../parts/WhatIs";
import HowIt from "../parts/HowIt";
import HaveSubcribe from "../parts/HaveSubcribe";

import china from "../../assets/china-info.png";
import chinaBg from "../../assets/china_bg.png";

import japan from "../../assets/japan-info.png";
import japanBg from "../../assets/japan-bg.png";

import brazil from "../../assets/brazil-info.png";
import brazilBg from "../../assets/brazil_bg.png";

import usa from "../../assets/us-info.png";
import usaBg from "../../assets/us_bg.png";

import arrowNext from "../../assets/arrow-alt-circle-right-solid.svg";
import arrowPrev from "../../assets/arrow-alt-circle-left-solid.svg";

const Rlink = Styled(Link)`
  text-decoration: none  !important;
`;

const Home = Styled.div`
  margin-top: -100px;
  height: auto;

  .ready{
    margin: 0 !important;
    padding: 0 !important;
    width: 100%;
    height: 100vh;
    display:grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;

    .hWrap{
      grid-column: 1;
      grid-row: 1;
      padding: 0;
      height: 100%;
    }
    .container{
      grid-column: 1;
      grid-row: 1;
      info{
        z-index: 999;
        text-align: left;
      }
    }


  }

  .carousel{
    height: 100%;
    margin-top: -50px;
    .carousel-inner{
      height: 100%;
    }
    .carousel-item {
      min-height: 100% !important;
      background-position: center;
      background-size: cover;

      &:nth-child(1) {
        background-image: url('${japanBg}');
      }
      &:nth-child(2) {
        background-image: url('${usaBg}');
      }
      &:nth-child(3) {
        background-image: url('${chinaBg}');
      }
      &:nth-child(4) {
        background-image: url('${brazilBg}');
      }
    }
    .carousel-item{
      height: auto;
      padding-bottom: 20px;

      .countryIcon{
        height: 100vh;
        display: grid;
        grid-template-columns: 6fr 4fr;

        figure{
          grid-column: 2;
          grid-row: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          img{
            margin-top: 30%;
            width: 90%;
            height: auto;
          }
        }
        .titleImg{
          color: black;
          font-weight: bold;

          position: static;
          display: flex !important;
          flex-direction: column;
          justify-content: flex-end;
          margin-top: -30px;
        }
      }

    }

    a .carousel-control-next-icon{
      background-image: url(${arrowNext}) !important;
      width: 40px;
      height: 40px;
    }
    a .carousel-control-prev-icon{
      background-image: url(${arrowPrev}) !important;
      width: 40px;
      height: 40px;
    }

    .carousel-indicators{
      position: absolute;
      left: 44%;
      li{
        background-color: white;
        border:2px solid #0080F7
        height: 20px !important;
        width: 20px !important;
        margin-top: 127px; !important;
        border-radius: 100% !important;
      }
      .active{
        background-color: #0080F7 !important;
      }
    }

  }

  @media screen and ( max-width: 768px ){
    .info{
      text-align: center;
      margin-top: -50%;
    }

    .countryIcon{
      grid-template-columns: 1fr !important;

      figure{
        justify-content: flex-end !important;
        margin-top: -20%;
      }
      figure img{
        width: 50% !important;
      }
    }
  }

  


`;

const items = [
  {
    src: `${japan}`,
    altText: "Japan",
    caption: "Japan"
  },
  {
    src: `${usa}`,
    altText: "United States of American",
    caption: "United States of American"
  },
  {
    src: `${china}`,
    altText: "China",
    caption: "China"
  },
  {
    src: `${brazil}`,
    altText: "Brazil",
    caption: "Brazil"
  }
];

export default class Home2 extends Component {
  state = {
    mTop: "25%",
    color: "black",
    bgColor: undefined,
    opacity: 0,
    stSize: "4vw"
  };

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  componentDidMount() {
    setTimeout(() => this.setState({ opacity: 1, stSize: "3.5vw" }), 1000);
    setTimeout(() => this.setState({ mTop: "42%" }), 1500);
    setTimeout(
      () => this.setState({ bgColor: "hsla(0,0%,0%, .1)", color: "white" }),
      3000
    );
  }

  render() {
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <Container className="countryIcon">
            <figure>
              <img className="frontImage" src={item.src} alt={item.altText} />
              <CarouselCaption
                className="titleImg"
                captionText={item.caption}
              />
            </figure>
          </Container>
        </CarouselItem>
      );
    });

    const { activeIndex } = this.state;
    return (
      <Home className="animated fadeIn">
        <Container className="ready" fluid>
          <Col className="hWrap">
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
              className="carousel-fade"
              interval="2000"
              pause={false}
            >
              {/* <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={this.goToIndex}
                /> */}
              {slides}
              {/* <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous}
              /> */}
              {/* <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              /> */}
            </Carousel>
          </Col>

          <Container>
            <Row>
              <Col lg="5" className="info">
                <h1 className="homeTitle">Ready for your new trip?</h1>
                <p>
                  Are you ready for safe travel with your family and friends? Let’s explore your chosen destination.
                </p>
                <Rlink to="/Planner">
                  <Button color="primary">Plan Your Trip</Button>
                </Rlink>
              </Col>
            </Row>
          </Container>
        </Container>
        <WhatIs />

        <HowIt />

        <HaveSubcribe />
      </Home>
    );
  }
}
