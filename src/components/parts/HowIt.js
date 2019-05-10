import React from "react";
import Styled from "styled-components";
import { Container, Col } from "reactstrap";

import howImg from "../../assets/howitwork.svg";

const Container1 = Styled.div`
  margin: 24px auto 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;

  p{
    font-size: 16px;
  }

  .col1{
    text-align: center;
    width: 100%;
    h1{
      color: #0080F7;
      font-weight: 1000;
    }
  }

  .col2{
    figure{
      display:flex;
      justify-content: center;
      align-items: center;
      width:100%;
      
      img{
        width: 100%;
      }
    }
  }

  .col3{
    display:flex;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;

    .hCard{
      text-align: center;
      margin: 0 !important;
    }

    .number{
      background-color: #0080F7;
      border-radius: 100%;
      padding:16px;
      width: 70px;
      height: 70px;
      margin: 0 auto;

      span{
        color: white;
        font-size: 24px;
        font-weight: 900;
        line-height: 40px;
      }
    }

  }

  @media screen and ( min-width: 1200px ){

    .container{
      max-width: 1200px;
      display: grid;
      grid-template-areas:
        'image header'
        'image content';
      grid-template-columns: 50%;
      grid-template-rows: auto 1fr;
      grid-gap: 10px;
      margin: 50px auto;
  
      .col1{
        grid-area: header;
        text-align: left;
      }
      .col2{
        margin:auto;
        grid-area: image;
      }
  
      .col3{
        grid-area: content;
        justify-content: flex-start;

        .hCard{
          margin: 12px 16px;
          display: flex;
          flex-direction: row;
          

          .number{
            margin: 5px;
            width: 70px;
            height: 70px;
            span{
              font-size: 24px;
              line-heigth: 10px;
            }
          }
          p{
            text-align: left;
            margin: auto 12px;
          }
        }
  
      }
    }

  }

`;

class HowIt extends React.Component {
  render() {
    return (
      <Container1>
        <Container>
          <Col className="col1">
            <h1>How it works ?</h1>
            <p>
              With just a few simple steps, you can prepare for your trip more
              safe and fun.
            </p>
          </Col>

          <Col className="col2">
            <figure>
              <img src={howImg} alt="How it work?" />
            </figure>
          </Col>

          <Col className="col3">
            <div className="hCard">
              <div className="number">
                <span>1</span>
              </div>
              <p>Sign up to start the plan. Don't worry it's free</p>
            </div>

            <div className="hCard">
              <div className="number number2">
                <span>2</span>
              </div>
              <p>Start planning your trip in the PLANNER page</p>
            </div>

            <div className="hCard">
              <div className="number number2">
                <span>3</span>
              </div>
              <p>You can view your plans anytime in your profile</p>
            </div>
          </Col>
        </Container>
      </Container1>
    );
  }
}

export default HowIt;
