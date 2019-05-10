import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components';
import { Col, Row, Button } from 'reactstrap'

import howImg from '../../assets/howitwork.png'


/*------- Styled Input -------*/
const TheInput = Styled.div`
  input{
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-bottom: 2px solide white;
    font-size: 19pt;
    padding: 4px 16px;
    width:270px;
    margin-left: 15px;
    background-color: transparent;
    caret-color: white;
    color: white;
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      text-align: center;
      color: white;
    }
    &::-moz-placeholder { /* Firefox 19+ */
      text-align: center;
      color: white;
    }
    &:-ms-input-placeholder { /* IE 10+ */
      text-align: center;
      color: white;
    }
    &:-moz-placeholder { /* Firefox 18- */
      text-align: center;
      color: white;
    }

    &:focus{
      outline: none;
    }
  }

  @media screen and ( min-width: 600px ){
    input{
      padding-left: 0;
      width: 350px;

      &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        text-align: left;
      }
      &::-moz-placeholder { /* Firefox 19+ */
        text-align: left;
      }
      &:-ms-input-placeholder { /* IE 10+ */
        text-align: left;
      }
      &:-moz-placeholder { /* Firefox 18- */
        text-align: left;
      }
    }
  }

`
/*------- END -------*/

/*------- Styled Button -------*/
const Button1 = Styled(Button)`
    position: relative;
    margin: 12px;
    padding: 8px 16px !important;
    display: block;
    overflow: hidden;
    border-width: 0;
    outline: none;
    border-radius: 40px !important;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    color: white;
    background-color: transparent !important;
    transition: background-color .3s;
    width: 160px;
    height: auto;
    font-size: 17pt !important;
    font-family: 'Montserrat', sans-serif;
    border:2px solid white !important;

    > * {
      position: relative;
    }
    &:hover{
      background-color: white !important;
      color: #0080F7 !important;
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
  padding-top: 36px;
  height: 100%;
  padding: 24px;
  background: #0080F7;
  .colReady{
    text-align: center;
    h1{
      color: white;
      font-weight: 1000;
    }
    p{
      font-size: 21pt;
      margin: 16px;
      color: white;

    }
  }

  .colReady2{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h4{
      margin: 16px auto;
      color: white;
      font-weight: 1000;
    }

    Button{
      margin-top: 21px;
    }


  }

  @media screen and ( min-width: 1200px ){
    max-width: 1200px;
    .colReady{
      text-align: left;
      margin-left: 16px;
      p{ margin-left: 0}
    }
    .colReady2{
      margin:auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      h4{
        margin-left: 16px;
      }

    }

  }




`

class HaveSubcribe extends React.Component {
  render () {
    return(
      <Container1>
        <Col className="colReady">
          <h1>Ready to add plan</h1>
          <p>Finish your plan by adding the plan to your profile. You can edit your plan anytime you want by going to your profile setting.</p>
        </Col>

        <Col className="colReady2">
          <div className="GroupInput">
            <h4>Enter plan name</h4>
            <TheInput>
              <input type="text" placeholder="my first trip"/>
            </TheInput>
          </div>
          <Button1>Send</Button1>
        </Col>
      </Container1>
    )

  }
}

export default HaveSubcribe;
