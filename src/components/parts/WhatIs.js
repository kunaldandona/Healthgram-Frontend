import React from "react";
import Styled from "styled-components";
import { Row, Col } from "reactstrap";

import Personal from "../../assets/person_icon@1x.svg";
import Global from "../../assets/global_icon@1x.svg";
import Notification from "../../assets/notification_icon@1x.svg";

const Container1 = Styled.div`
  padding: 16px auto;
  margin: 70px auto 90px auto;

  p{
    font-size: 16px;
    margin: 16px;

  }
  .col1{
    text-align: center;
    margin-bottom: 30px !important; 
    h1{
      color: #0080F7;
      font-weight: 1000;
    }
  }

  .col2{
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;

    .sCard{
      text-align: center;
      h4{
        color: black;
        font-weight: bold;
      }


    }


    img{
      width: 105px;
      height: 125px;
    }
  }

  @media screen and ( min-width: 900px ){
    .col1{
      max-width: 900px
      margin:0 auto;
    }

    .col2{
      flex-direction: row;

      .sCard{
        margin: 12px 16px;
        figure{
          height: 100px;
        }
        img{
          height:80%;
        }
      }

    }
  }
  @media screen and ( min-width: 1200px ){
    max-width: 1200px
  }



`;

class WhatIs extends React.Component {
  render() {
    return (
      <Container1>
        <Row>
          <Col className="col1" xs={{ size: 10, offset: 1 }}>
            <h1>What is HealthGram ?</h1>
            <p>
              HealthGram is the platform that makes your life more simple and
              secured. We provide accurate health information based on location
              and statistics. This is one step closer to protect your loved
              ones.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={{ size: 10, offset: 1 }} md={{ size: 4, offset: 0 }}>
            <div className="sCard text-center">
              <figure>
                <img src={Personal} alt="Personal" />
              </figure>
              <h4>Personal Allergies</h4>
              <p>Cross check user's profile with specific location</p>
            </div>
          </Col>
          <Col xs={{ size: 10, offset: 1 }} md={{size:4, offset: 0}}>
            <div className="sCard text-center">
              <figure>
                <img src={Global} alt="Global" />
              </figure>
              <h4>Global Diseases</h4>
              <p>Know the diseases status changing every year</p>
            </div>
          </Col>
          <Col xs={{ size: 10, offset: 1 }} md={{size:4, offset: 0}}>
            <div className="sCard text-center">
              <figure>
                <img src={Notification} alt="Notification" />
              </figure>
              <h4>Notification</h4>
              <p>Notify user about any outbreak in nearby location</p>
            </div>
          </Col>
        </Row>
      </Container1>
    );
  }
}

export default WhatIs;
