import React from "react";
import axios from "axios";
import AirQualityPieChart from "../components/SimplePieChart";
import { Col } from "reactstrap";
import Weather from "./Weather";
import Suggestions from "../components/Suggestions";

import prepare_allergy from "../../../assets/prepare_allergy@1x.svg";

// import SimplePieChart from "./SimplePieChart";
let suggestions = require("../static/air-quality.json");

class AirQuality extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      info: { info: {} },
      risk: ""
    };
    this.getAirQuality = this.getAirQuality.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.getRisk = this.getRisk.bind(this);
  }

  componentDidMount() {
    if (this.props.show) {
      this.getAirQuality(this.props.country);
      if (!this.pollInterval) {
        this.pollInterval = setInterval(
          this.getAirQuality(this.props.country),
          100
        );
      }
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.country !== prevProps.country) {
      this.getAirQuality(this.props.country);
    }
  }

  getAirQuality = country => {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${country}&inputtype=textquery&fields=geometry&key=AIzaSyAaW6aou2PiPHgD15WYQ32kWShG6V9dOcM`
      )
      .then(response => {
        // console.log('the response', response);
        this.setState({
          lat: response.data.candidates[0].geometry.location.lat,
          lon: response.data.candidates[0].geometry.location.lng
        });
        return axios.get(
          `https://api.airvisual.com/v2/nearest_city?lat=${
            this.state.lat
          }&lon=${this.state.lon}&key=eFTPQgYjY7EtnRLik`
        );
      })
      .then(response => {
        // aqius: response.data.current.pollution.aqius;
        this.setState({
          aqius: response.data.data.current.pollution.aqius,
          loaded: true
        });
        this.getSuggestions();
        this.getRisk();
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  };

  getSuggestions() {
    for (var i = 0; i < suggestions.length; i++) {
      if (
        this.state.aqius > suggestions[i].aqi[0] &&
        this.state.aqius < suggestions[i].aqi[1]
      ) {
        this.setState({
          info: {
            info: suggestions[i].info
          }
        });
        // return null;
      }
    }
  }

  getRisk() {
    for (let i = 0; i < suggestions.length; i++) {
      if (
        this.state.aqius > suggestions[i].aqi[0] &&
        this.state.aqius < suggestions[i].aqi[1]
      ) {
        this.setState({
          risk:
            suggestions[i].risk.charAt(0).toUpperCase() +
            suggestions[i].risk.slice(1) +
            " risk"
        });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Col xs="12">
          <h1>Air Quality and Weather Forecast</h1>
        </Col>
        <Col
          sm="12"
          lg={{ size: 4, offset: 1 }}
          className="airQualityContainer"
        >
          {this.state.loaded && (
            <React.Fragment>
              <h4>Air Quality</h4>
              <AirQualityPieChart aqi={this.state.aqius} max={200} />
              <div className="aqinfo">
                <strong>{this.state.aqius}</strong>
                <span>{this.state.risk}</span>
              </div>
            </React.Fragment>
          )}
        </Col>
        {/* <Col sm="12" md="6" className="weatherContainer"> */}
        <Weather show={true} country={this.props.country} />
        {/* </Col> */}
        <Suggestions
          info={this.state.info}
          img={prepare_allergy}
          alt={"Prepare for allergy"}
        />
        {/* {this.getSuggestions()} */}
      </React.Fragment>
    );
  }
}

export default AirQuality;
