import React from 'react'
import {Input} from 'reactstrap'
import Styled from 'styled-components';

/*--------------------------------------------------------------*/
/* Style Input
/*--------------------------------------------------------------*/
const TheInput1 = Styled.div`
    .testInput, textarea{
      position: relative;
      padding-top: 1.5rem;
      display: flex;
      margin: 16px;
      flex-flow: column nowrap;
      border-bottom: 2px solid grey;
      background-color: rgba(255, 255, 255, 0.3);
      width: 100%;

      input, textarea {
        width: 100%;
        font-size: 15pt;
        padding: 4px 6px 4px 0;
        font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
        border:none;
        z-index: 1;
        margin: 8px 0;
        &:active{
          outline: none;
        }
        &:focus{
          outline: none;
        }
      }

      label {
        position: absolute;
        top: -12px;
        font-size: 15pt;
        opacity: 1;
        transform: translateY(0);
        transition: all 0.2s ease-out;
        padding: 16px 0 6px 0;
        z-index: 0;
        font-weight: bold;

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
`
/*------- End Style Input  -------*/

class TheInput extends React.Component {
  render () {
    return(
      <TheInput1/>

    )
  }
}

export default TheInput;
