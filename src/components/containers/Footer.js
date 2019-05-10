import React from "react";
import { Nav, NavItem, NavLink, Container, Col } from "reactstrap";
import Styled from "styled-components";

const IconList = Styled(Nav)`
  height: 52px;
  display: flex;
  justifyContent: space-between;
  background-color: #3D3D3D;
  width: 100%;
  .nav-item{
    width: 25%;

    a{
      padding: 20px;
      width: 100%;
      display:flex;
      justify-content: center;
      align-items: center;

      i{
        color: white;
        font-size: 20px;
      }
    }

  }


  .nav-item:hover, .nav-item:focus{
    background-color: none !important;
    &:hover i, &:focus i{
        color: #0079ff;
    }
  }


  @media screen and (min-width: 900px){
    display:flex;
    justify-content: flex-end;
    background-color: #3D3D3D;
    .nav-item{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin:0 0 0 16px;
      a{
        i{
          color: #F5F5F5;
        }
      }
    }


    .nav-item:hover, .nav-item:focus{
      background-color: none !important;
      &:hover i, &:focus i{
        color: #0079ff;
      }
    }

  }
`;


const Container1 = Styled(Container)`
  background-color: #3D3D3D;
  max-width: 100% !important;
  margin: 0 !important;
  padding:0 !important;
  height: 100px;

  display: flex;
  align-items: center;

  .wrap{
    .leftSize{
      display:flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;

      img{
        width: 40px;
        height: 40px;
      }
    }
    .copyright{
        color: white;
        margin: 0;
        padding: 0;
        margin-top: 10px;
        text-align: center;
    }

  }

  @media screen and ( min-width: 700px ){
    .wrap{
      display: flex;
      justify-content: space-around
      flex-direction: row-reverse;

      .leftSize{
          justify-content: flex-start;
          align-items: center;
      }
      .copyright{
        text-align: left;
      }


      .rightSize{
      }
    }

  }

  @media screen and ( min-width: 1200px ){
  }

`;

export default class Footer extends React.Component {
  render() {
    return (
      <Container1>
        <Container className="wrap">
          <IconList className="rightSize">
            <NavItem>
              <NavLink
                href="https://www.facebook.com/THC-The-Healing-Center-859219167445611/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f" />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://twitter.com/THC604"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fab fa-twitter" />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://plus.google.com/111050996058022201020"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-youtube" />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="mailto:info@thc.care"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram" />
              </NavLink>
            </NavItem>
          </IconList>

          <Container className="leftSize">
            <Col className="copyright">
              <figure>
                <h5>
                  <span>&copy;</span> 2018 HealthGram
                </h5>
              </figure>
            </Col>
          </Container>
        </Container>
      </Container1>
    );
  }
}
