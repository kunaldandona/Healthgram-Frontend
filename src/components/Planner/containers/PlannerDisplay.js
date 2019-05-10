import React, { Component } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import ChartContainer from "./ChartContainer";
import MapHandle from "./MapHandle";
// import AirQuality from "./AirQuality";
import AirQualityBr from "./AirQualityBr";
import Clinics from "../components/Clinics";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";
// import { configureAnchors } from "react-scrollable-anchor";
// import AnimatedMap from "./components/SimpleMap";
// import Weather from "./Weather";

// import AutoSuggest from "./components/AutoSuggest";

class PlannerDisplay extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      value: "",
      showData: false
    };
    this.inputRef = React.createRef();

    // this.onChangeText = this.onChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: this.inputRef.current.value, showData: true });
    goToAnchor("section2");
  };

  render() {
    return (
      <div className="container-fluid planner">
        <Row className="mapContainer" id="map">
          {/* Map component */}
          <MapHandle country={this.state.value} />
          <form onSubmit={this.handleSubmit}>
            <strong>Enter a location</strong>
            <div>
              <input
                ref={this.inputRef}
                type="text"
                onChange={this.onChangeText}
                placeholder="E.g. Canada, China"
              />
              <Button color="primary" key="search">
                Submit
            </Button>
            </div>
          </form>
        </Row>
        <Container>
          {/* Chart component */}

          {this.state.showData && <ScrollableAnchor id={"section2"}>
            <ChartContainer
              show={this.state.showData}
              country={this.state.value}
            />
          </ScrollableAnchor>

          }

          <Row className="airContainter">
            {/* Air Quality */}
            {this.state.showData && (
              // <AirQuality
              //   show={this.state.showData}
              //   country={this.state.value}
              // />
              <AirQualityBr
                show={this.state.showData}
                country={this.state.value}
              />
            )}
            {/* Weather component */}
          </Row>
          <Row className="clinicListContainer">
            {this.state.showData && <Clinics />}
          </Row>
        </Container>
        {this.state.showData && (
          <Row className="addPlan">
            <Container>
              <Col md={{ size: 10, offset: 1 }}>
                <h2>Ready to add plan?</h2>
                <p>
                  Finish your plan by adding it to your profile. You can edit
                  your plan anytime you want by going to your profile setting.
                </p>
                <div className="form">
                  <strong>Enter plan name</strong>
                  <form>
                    <input type="text" />
                    <Button color="primary" outline>
                      Add plan
                    </Button>
                  </form>
                </div>
              </Col>
            </Container>
          </Row>
        )}
      </div>
    );
  }
}

export default PlannerDisplay;
