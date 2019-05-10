import React from "react";
import Styled from "styled-components";
import { Container, Col, Row } from "reactstrap";

import Pill from "../../assets/pill@1x.svg";
import Bag from "../../assets/business@1x.svg";
import Pie from "../../assets/pie@1x.svg";

import AboutUs from "../parts/AboutUs";
import ContactUs from "../parts/ContactUs";

const Container1 = Styled.div`
  padding: 16px auto;
  margin: 140px auto 24px auto;
  height: auto;

  .col1{
    text-align: center;
    h1{
      color: #0080F7;
    }
  }

  .col2{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;

    margin-bottom: 60px;

    .pCard{
      text-align: center;

      h1{
        color: black;
        font-weight: 900;
        font-size: 40pt;
        letter-spacing: 4px
      }
      h4{
        font-weight: 900;
      }

    }

  }

  @media screen and ( min-width: 1050px ){
    .col1{
      max-width: 900px
      margin:0 auto;
    }

    .col2{
      flex-direction: row;
      .card{
        margin-top: 24px !important;
      }


      .pCard{
        margin: 12px 16px;
      }

    }
  }
  @media screen and ( min-width: 1200px ){
    .wrap{
      max-width: 1200px;
      margin: 0 auto;

    }
  }



`;

class Partner extends React.Component {
  render() {
    return (
      <Container1 className="animated fadeIn">
        <Container className="wrap text-center">
          <Row>
            <Col xs={{ size: 10, offset: 1 }}>
              <h1>Partner With Us</h1>
              <p>Why partner with us?</p>
            </Col>
          </Row>

          <Row>
            <Col xs={{ size: 10, offset: 1 }} md={{size:4, offset: 0}}>
              <div className="pCard">
                <figure>
                  <img src={Pill} alt="Personal" />
                </figure>
                <p>Provide services specialized in allergies and diseases</p>
              </div>
            </Col>
            <Col xs={{ size: 10, offset: 1 }} md={{size:4, offset: 0}}>
              <div className="pCard">
                <figure>
                  <img src={Bag} alt="Personal" />
                </figure>
                <p>Get your potential customers around the world</p>
              </div>
            </Col>
            <Col xs={{ size: 10, offset: 1 }} md={{size:4, offset: 0}}>
              <div className="pCard">
                <figure>
                  <img src={Pie} alt="Personal" />
                </figure>
                <p>Expand your clinic business in many aspects</p>
              </div>
            </Col>
          </Row>
        </Container>

        <AboutUs />

        <ContactUs />
      </Container1>
    );
  }
}

export default Partner;
