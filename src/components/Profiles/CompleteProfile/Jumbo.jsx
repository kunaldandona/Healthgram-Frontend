import React from "react";
import { Jumbotron, Container, Col, Row } from "reactstrap";
import profile from "../../../assets/profile-user.svg";

const JumbotronComplete = props => {
  return (
    <div>
      <Jumbotron fluid className="profile-jumbo text-left">
        <Container>
          <Row>
            <Col xs="12" md="2">
              <div className="round">
                <img src={profile} alt="Avatar" />
              </div>
            </Col>

            <Col xs="12" md="10">
              <h1>Hello, {props.name}!</h1>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComplete;
