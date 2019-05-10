import React from "react";
import Styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  Button,
  CardTitle,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";

const Container1 = Styled.div`
  padding: 16px auto;
  margin: 80px auto 200px auto !important;
  
  h5{
    font-size: 2.5rem;
    font-weight: 900;
  }
  h6{
    font-size: 1.5rem;
  }
  h5,h6{
      text-align: center;
    }

  ul{
    padding-left: 20px;
    margin-bottom: 50px;
    li{
      font-size: 1rem;
    }
  }
    
    .card{
      margin: 24px 16px !important;
      padding: 60px 24px !important;
      display: flex;
      flex-direction: column;

      -webkit-box-shadow: 0px 3px 4px 3px rgba(219, 219, 219, 0.5);
      -moz-box-shadow: 0px 3px 4px 3px rgba(219, 219, 219, 0.5);
      box-shadow: 0px 3px 4px 3px rgba(219, 219, 219, 0.5);

      background: white;

      h2{
        margin-bottom: 20px;
      }

      .card-body{
        display: flex;
        flex-direction: column;
      }

      button{
        align-self: center;
      }
    }

    .special{
      background: #0079ff;
      color: white;

      -webkit-box-shadow: 0px 3px 4px 3px rgba(219, 219, 219, 0.5);
      -moz-box-shadow: 0px 3px 4px 3px rgba(219, 219, 219, 0.5);
      box-shadow: none;

      button{
        border-color: white;
        color: white;

        &:hover{
          background: white;
          color: #0079ff;
        }
      }
    }

    .card:first-of-type .card-subtitle{ color: #0080F7 !important }
    .card:nth-of-type(2) .card-subtitle{ color: white !important }
    .card:nth-of-type(3) .card-title{ color: #ff5e62 !important; font-size: 2rem; margin-bottom: 2.5rem }
    

  @media screen and ( min-width: 1200px ){
    max-width: 1200px
    height: 70vh;
    .col1{
      max-width: 900px
      margin:0 auto;
    }

    .pricing{
      flex-direction: row;

      .pCard{
        margin: 12px 16px;
      }

    }
  }


`;

class Pricing extends React.Component {
  render() {
    return (
      <Container1 className="animated fadeIn justify-content-sm-center">
        <Row className="text-center">
          <Col xs={{ size: 10, offset: 1 }}>
            <h1>Hello There !</h1>
            <p>Sign up now and you will get more great features and deals</p>
          </Col>
        </Row>
        <Container>
          <CardGroup>
            <Card>
              <CardBody>
                <CardSubtitle>BASIC</CardSubtitle>
                <CardTitle>FREE</CardTitle>
                <ul>
                  <li>Have access to one location status</li>
                  <li>Save one plan to your profile</li>
                </ul>
                <Button color="primary" outline>
                  Get Started
                </Button>
              </CardBody>
            </Card>
            <Card className="special">
              <CardBody>
                <CardSubtitle>PREMIUM</CardSubtitle>
                <CardTitle>$3.99</CardTitle>
                <ul>
                  <li>Have access to many location status</li>
                  <li>Save many plans to your profile</li>
                </ul>
                <Button color="primary" outline>
                  Get Started
                </Button>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>ENTERPRISE</CardTitle>
                <ul>
                  <li>Access to our API</li>
                  <li>24/7 support</li>
                  <li>Custom data visualization</li>
                </ul>
                <Button color="primary" outline>
                  Call for Price
                </Button>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
      </Container1>
    );
  }
}

export default Pricing;
