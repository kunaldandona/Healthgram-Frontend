import React from 'react'
import Styled from 'styled-components';
import { Container, Col, Button } from 'reactstrap'


/*------- Styled Input -------*/
const TheInput = Styled.div`
  input{
    border-radius: 40px !important;
    border: 2px solid white;
    font-size: 16px;
    padding: 4px 5px;
    width:300px;
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      text-align: center;
    }
    &::-moz-placeholder { /* Firefox 19+ */
      text-align: center;
    }
    &:-ms-input-placeholder { /* IE 10+ */
      text-align: center;
    }
    &:-moz-placeholder { /* Firefox 18- */
      text-align: center;
    }

    &:focus{
      outline: none;
    }
  }

  @media screen and ( min-width: 600px ){
    input{
      width: 320px;
    }
  }

`
/*------- END -------*/

/*------- Styled Button -------*/
const Button1 = Styled(Button)`
    position: relative;
    margin-top: 2px !important;
    padding: 8px 16px !important;
    display: block;
    overflow: hidden;
    border-width: 0;
    outline: none;
    border-radius: 50px !important;
    color: white;
    background-color: transparent !important;
    transition: background-color .3s;
    width: 160px;
    height: 36px;
    font-size: 18px !important;
    line-height: 20px !important;
    font-family: 'Montserrat', sans-serif;
    border:1px solid white !important;

    > * {
      position: relative;
    }
    &:hover{
      background-color: white !important;
      color: #FF5666 !important;
      border:2px solid white !important;
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


const Container1 = Styled.div`
  margin: 0 auto;
  height: 100%;
  padding: 50px 0;
  background: #FF5666;
  .col1{
    text-align: center;
    margin-bottom: 20px;
    h4{
      color: white;
      font-weight:bold;
    }
    p{
      font-size: 16px;
      margin: 0;
      color: white;

    }
  }

  .col2{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    Button{
      margin-top: 21px;
      width: 100px;
    }


  }

  @media screen and ( min-width: 1200px ){
    
    .container{
      max-width: 1200px;
      display: flex;
      flex-direction: row;
      .col1{
        text-align: left;
        margin-left: 16px;
        p{ margin-left: 0}
      }
      .col2{
        margin:auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        
        input{
          margin-right: 20px;
        }
      }
    }
  }

`


class HaveSubcribe extends React.Component {
  render () {
    return(
      <Container1 id="link1">
        <Container>
          <Col lg="5" className="col1">
            <h4>Have you subscribed to our newsletter yet?</h4>
            <p>More features and supports are coming.</p>
          </Col>

          <Col lg={{size:6, offset:1}} className="col2">
            <TheInput>
              <input type="text" placeholder="Enter your email"/>
            </TheInput>
            <Button1>Send</Button1>
          </Col>

        </Container>
      </Container1>
    )
  }
}

export default HaveSubcribe;
