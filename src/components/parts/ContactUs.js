import React from "react";
import Styled from "styled-components";
import { Row, Col, Button, Input } from "reactstrap";

/*------- Styled Button -------*/
const Button1 = Styled(Button)`
    position: relative;
    margin: 12px;
    padding: 8px 16px !important;
    display: block;
    overflow: hidden;
    border-width: 0;
    outline: none;
    border-radius: 50px !important;
    color: #0080F7 !important;
    background-color: transparent !important;
    transition: background-color .3s;
    width: 120px;
    height: auto;
    border:1px solid #0080F7 !important;

    > * {
      position: relative;
    }
    &:hover{
      background-color: #0080F7 !important;
      color: white !important;
    }
    &:before{
      background-color: rgba(236, 240, 241, .3);
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 0;
      padding-top: 0;
      border-radius: 100%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    &:active:before {
      width: 120%;
      padding-top: 120%;
      background-color: grey;
      opacity: .6;
      transition: width .2s ease-out, padding-top .2s ease-out;
    }
  `;
/*------- END -------*/

/*--------------------------------------------------------------*/
/* Style Input
/*--------------------------------------------------------------*/
const TheInput = Styled.div`
  .testInput {
    position: relative;
    padding-top: 1.5rem;
    display: flex;
    margin: 16px;
    flex-flow: column nowrap;
    background-color: rgba(255, 255, 255, 0.3);
    width: 290px;

    input, textarea {
      width: 100%;
      font-size: 16px;
      padding: 4px 6px 4px 0;
      border:none;
      &:active{
        outline: none;
      }
      &:focus{
        outline: none;
      }
    }

    input{
      border-bottom: 1px solid #0080F7;
      heigth: 50px;
    }

    textarea{
      height: 100px;      
      // border-bottom: 1px solid #0080F7;

      border: 1px solid #0080F7;
      border-radius: 0;
      margin-top: 10px;
    }

    label {
      position: absolute;
      top: -12px;
      opacity: 1;
      transform: translateY(0);
      transition: all 0.2s ease-out;
      padding: 16px 0 6px 0;
      z-index: 0;
      color: #0080F7;
    }
    input::placeholder, textarea::placeholder {
      color: #0080F7;
    }

    input:placeholder-shown + label {
      opacity: 0;
      transform: translateY(1rem);
      z-Index: 1
    }
    textarea:placeholder-shown + label {
      opacity: 0;
      transform: translateY(1rem);
    }
  }

  @media screen and (min-width: 600px) {

    .testInput {
      width: 400px !important;
    }
  }

`;
/*------- End Style Input  -------*/

const StyledContact = Styled.div`
  margin: 0 auto;
  height: auto;
  padding: 0 20px;
  background: white;

    .form{
      margin-top: -40px;

      display: flex;
      flex-direction: column;

      button{
        align-self: flex-end;
        margin: 0 !important;
      }
    }
  }

  @media screen and ( min-width: 1200px ){
    max-width: 1200px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;

  }
`;

export default class ContactUs extends React.Component {
  render() {
    return (
      <StyledContact className="wrapper animated fadeIn">
        <Row>
          <Col lg={{ size: 5 }}>
            <h1>We Love To Hear From You</h1>
            <p>Shoot us a message and we'll get back to you within 24 hours.</p>
          </Col>

          <Col lg={{ size: 5, offset: 2 }} className="form">
            <TheInput>
              <div className="testInput">
                <input name="name" type="text" placeholder="Your Name*" />
                <label> Your Name*</label>
              </div>
            </TheInput>
            <TheInput>
              <div className="testInput">
                <input name="email" type="text" placeholder="Email*" />
                <label>Email*</label>
              </div>
            </TheInput>
            <TheInput>
              <div className="testInput">
                <Input
                  style={{ padding: "6px 6px 6px 0" }}
                  type="textarea"
                  name="message"
                  // placeholder="Message*"
                />
                <label>Message*</label>
              </div>
            </TheInput>
            <Button1 type="submit">Submit</Button1>
          </Col>
        </Row>
      </StyledContact>
    );
  }
}
