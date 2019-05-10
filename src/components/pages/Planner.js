import React, { Component } from "react";
import PlannerDisplay from "../Planner/containers/PlannerDisplay";
import { Container, Row, Col, Button } from "reactstrap";
import plan from "../../assets/plan@1x.svg";
import { Redirect } from "react-router-dom";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";

configureAnchors({ offset: -50, scrollDuration: 200 });

class PlannerPage extends Component {
  constructor() {
    super();
    this.state = {
      isNewPlan: null,
      redirect: false
    };
    this.handleButtons = this.handleButtons.bind(this);
  }

  handleButtons(e) {
    // if (sessionStorage.getItem("userData")) {
    if (e.target.id === "newPlan") {
      this.setState({ isNewPlan: true });
      goToAnchor("section1");
    } else if (e.target.id === "editPlan") {
      this.setState({ isNewPlan: false });
    }
    // } else {
    // this.setState({ redirect: true })
    // }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/Signin" />;
    }
    return (
      <React.Fragment>
        <section className="plannerLanding">
          <Container>
            <Row className="landing">
              <Col sm="12" md={{ size: 6 }}>
                <h1>Start Now</h1>
                <p>
                  Pick your location and prepare your trip with simple steps.
                </p>
                <form>
                  <Button
                    color="primary"
                    key="newPlan"
                    id="newPlan"
                    onClick={this.handleButtons}
                  >
                    Create New
                  </Button>
                  <Button
                    color="primary"
                    outline
                    key="editPlan"
                    id="editPlan"
                    onClick={this.handleButtons}
                  >
                    Edit Plan
                  </Button>
                </form>
              </Col>
              <Col sm="12" md={{ size: 6 }}>
                <img src={plan} alt="Plan your trip" />
              </Col>
            </Row>
          </Container>
        </section>
        <ScrollableAnchor id={"section1"}>
          <section>{this.state.isNewPlan && <PlannerDisplay />}</section>
        </ScrollableAnchor>
      </React.Fragment>
    );
  }
}

export default PlannerPage;
