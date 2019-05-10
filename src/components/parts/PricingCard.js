import React, {Component} from 'react';
import { Nav, NavItem, NavLink, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import Styled from 'styled-components';


const StyleCard = Styled(Card)`
box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
            0px 1px 1px 0px rgba(0,0,0,0.14),
            0px 1px 3px 0px rgba(0,0,0,0.12);
margin: 12px;
width: 320px;
height: auto;
box-sizing: border-box;
display:flex;
flex-direction: column;

.card-body{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-title{
  font-weight: bold;
  font-size: 16pt;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  margin: 6px 0 16px 0;
}
.card-text, .card-subtitle{
  font-size: 12pt;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}
.nav-item:hover, .nav-item:focus{
  background-color: white;
  &:hover i, &:focus i{
    color: black;
  }
}



`
const IconList = Styled(Nav)`
  margin: 0 auto;
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

@media screen and ( min-width: 900px ){
  width: 380px;
}


`

class About extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      title:  props.title || "",
      subtitle:  props.subtitle || "",
      content:  props.content || "",
      link: props.link || "",
      faLink: props.faLink || "",
      twitterLink: props.twitterLink || "",
      linkedLink: props.linkinLink || "",
      link: props.link || ""

    }
  }

  render(){
    const { faLink, twitterLink, linkedLink,  title, subtitle, content, link } = this.state;
    return (
      <div>
        <StyleCard>
          <CardImg top width="100%" height="auto" src={link} alt="Card image cap" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
            <CardText>{content}</CardText>
            <IconList>
              <NavItem>
                <NavLink href={faLink} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f fa-lg"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={twitterLink} target="_blank" rel="noreferrer"><i className="fab fab fa-twitter fa-lg"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={linkedLink} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in fa-lg"></i></NavLink>
              </NavItem>
            </IconList>
          </CardBody>
        </StyleCard>
      </div>
    );
  }
};

export default About;
