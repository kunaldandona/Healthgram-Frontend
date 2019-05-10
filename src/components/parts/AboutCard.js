import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import Styled from "styled-components";

const IconList = Styled(Nav)`
  margin: 12px auto 0 auto;;
  display:flex;
  justify-content: center;
  .nav-item{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin:0 0 0 16px;
    background-color: black;
    display:flex;
    justify-content: center;
    align-items: center;

    a{
      i{
        color: #F5F5F5;
      }
    }
  }

  .nav-item:hdesignersover, .nav-item:focus{
    background-color: white;
    &:hover i, &:focus i{
      color: black;
    }
  }

`;

const StyleCard = Styled(Card)`
  margin: 36px auto;
  width: 320px;
  height: auto;
  display:flex;
  // justify-content: center;
  // align-items: center;
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;

  img{
    border-radius: 100%;
    height: 300px !important;
    width: 300px !important;
    margin: 8px auto;
  }


  .card-body{
    h5, h6{
      text-align: left;
    }
  }
  .card-title{
    font-weight: bold;
    font-size: 18px;
  }
  .social{
    width: 100%;
    justify-content: flex-start;
    .nav-item{
      margin-left: 0;
      background-color: #0079ff;
      border-radius: 5px;

      width: 30px;
      height: 30px;
      font-size: 13px;

      .nav-link{
        padding: 2px;
      }
    }
  }




  @media screen and ( min-width: 1200px ){
    flex-flow: row nowrap !important;
    width: 100%;

  }


`;

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title || "",
      subtitle: props.subtitle || "",
      link: props.link || "",
      linkedLink: props.linkinLink || "",
    };
  }

  render() {
    const {
      linkedLink,
      title,
      subtitle,
      link,
      alt
    } = this.state;
    return (
      <StyleCard>
        <CardImg
          top
          width="100%"
          height="auto"
          src={link}
          alt={alt}
        />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>

          <IconList className="social">
            <NavItem>
              <NavLink href={linkedLink} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in fa-lg" />
              </NavLink>
            </NavItem>
          </IconList>
        </CardBody>
      </StyleCard>
    );
  }
}

export default About;
