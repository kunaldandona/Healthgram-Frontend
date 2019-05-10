import React from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Container
} from "reactstrap";

import { NavLink as RRNavLink } from "react-router-dom";
import Styled from "styled-components";

import profile from "../../assets/profile-user.svg";

import logoMobile from "../../assets/logoMobile.png";
import logoDesktop from "../../assets/logoDesktop.png";

const AppBar = Styled(Navbar)`
  z-index: 1000;
  transition: all .1s linear;
  margin-top: 30px;
  padding-bottom: .5px !important;
  height: 70px;
  top: 0;

  .container{
    padding: 0;
    margin: 0;
  }

  .navbar{
    padding: 0 !important;
    margin: auto !important;
  }

  .navbar-brand {
    a {
      display: flex;
      flex-flow: row nowrap;
      padding: 0;

      .ad {
        display: none;

        @media screen and (min-width: 600px){
          display: block;
        }
      }
      &:hover {
        text-decoration: none
        span {
          color: white;
        }
      }

    }
  }

  .navbar-nav{
    text-align: right;
    background-color: white;
  }

  .nav-item {
    font-size: 18px;
    margin: 0 5px 0 5px;
    padding: 6px;

    .nl {
      color: black;
        &: hover {
          padding-bottom: 0;
          color: #0079ff !important;
          transition: all .5s ease-in;
      }
    }

  }
  .navbar-toggler{
    // background-color: #0080F7;
    border: none !important;
    padding-right: 0 !important;
    padding-top: 0 !important;
  }


  .logoPart{
    .logoDesktop{
      display:none

    }
    .logoMobile{
      img{
        width: 50px;
        height: 50px;
      }
    }
  }

  .navbar-collapse{
  }



@media screen and ( min-width: 700px ){
  .navbar-collapse{
    justify-content: flex-end;
    background: white;

  }
  
  .logoPart{
    .col{
      padding: 0;
    }
    .logoDesktop{
      display:initial;
      width:100%;
      height: auto;
      margin: 6px 6px 6px 4px;
      padding: 6px 6px 6px 12px;
      img{
        width: 220px;
        height: 41px;
      }
    }
    .logoMobile{
      display: none;
    }
  }
  .menuBar{
    display: none;
  }
  .navbar-nav{
    background-color: transparent;
  }

  .nl{
    padding: auto 6px
    margin: auto 6px;
  }

}
@media (min-width: 768px){
  .navbar-expand-md {
    padding: 0 !important;
  }
  .collapse{
    background: none;
  }
}

  .signIn{
    padding: 0px 5px;
    align-self: flex-end;
    margin-bottom: 5px;

    .nav-link{
      padding: 0 !important;
    }
    

    img{
      margin-top: -5px;
      width: 40px;
      height: 40px;
      object-fit: cover;
    }

    
  }

`;

export default class Example extends React.Component {
  state = {
    isOpen: false,
    lastScrollY: "",
    headColor: "transparent",
    headFontColor: "hsla(100,100%,100%,.8)",
    mobColor: "hsla(0, 0%, 0%, .5)"
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleScroll = () => {
    window.scrollY > 100
      ? this.setState({
          headColor: "rgb(2, 21, 27)",
          headFontColor: "white",
          mobColor: "rgb(2, 21, 27)"
        })
      : this.setState({
          headColor: "hsla(100, 100%, 100%, 1)",
          headFontColor: "hsla(100,100%,100%,.8)",
          mobColor: "hsla(0, 0%, 0%, 0)"
        });
  };

  componentDidMount() {
    this.setState({ 
      lastScrollY: window.scrollY,
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Container fluid={true}>
        <Container>
          <AppBar className="p-0 navbar navbar-light" expand="md">
            <NavbarBrand className="logoPart" href="/">
              <figure className="logoMobile">
                <img src={logoMobile} alt=" Logo Mobile" />
              </figure>
              <figure className="logoDesktop p-0">
                <img src={logoDesktop} alt=" Logo Desktop" />
              </figure>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink
                    className="nl"
                    to="/Planner"
                    activeClassName="current"
                    tag={RRNavLink}
                  >
                    Planner
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nl"
                    to="/Partner"
                    activeClassName="current"
                    tag={RRNavLink}
                  >
                    Partners
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nl"
                    to="/Pricing"
                    activeClassName="current"
                    tag={RRNavLink}
                  >
                    Pricing
                  </NavLink>
                </NavItem>
                {sessionStorage.getItem("userData") ? (
                  <NavItem className="signIn">
                    <NavLink href="/Profile">
                      <img src={profile} alt="Avatar" />
                    </NavLink>
                  </NavItem>
                ) : (
                  <NavItem className="signIn">
                    <NavLink href="/Signin">
                      <Button color="primary">Sign in</Button>
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </Collapse>
          </AppBar>
        </Container>
      </Container>
    );
  }
}
