import React from "react"
import axios from "axios"
import AirQualityPieChart from "../components/SimplePieChart"
import { Col } from "reactstrap"
import Weather from "./Weather"
import Suggestions from "../components/Suggestions"

import prepare_allergy from "../../../assets/prepare_disease@1x.svg"

// import SimplePieChart from "./SimplePieChart";
// let suggestions = require("../static/air-quality.json");

const map_key = `${process.env.REACT_APP_PLACE_KEY}`
const key = `${process.env.REACT_APP_BREEZO_KEY}`

class AirQualityBr extends React.Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
      aqi: 0,
      info: { info: {} },
      risk: ""
    }
    this.getAirQuality = this.getAirQuality.bind(this)
    this.getSuggestions = this.getSuggestions.bind(this)
    // this.getRisk = this.getRisk.bind(this);
  }

  componentDidMount() {
    if (this.props.show) {
      this.getAirQuality(this.props.country)
      if (!this.pollInterval) {
        this.pollInterval = setInterval(
          this.getAirQuality(this.props.country),
          100
        )
      }
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.country !== prevProps.country) {
      this.getAirQuality(this.props.country)
    }
  }

  getAirQuality = country => {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${country}&inputtype=textquery&fields=geometry&key=${map_key}`
      )
      .then(response => {
        // console.log('the response', response);
        this.setState({
          lat: response.data.candidates[0].geometry.location.lat,
          lon: response.data.candidates[0].geometry.location.lng
        })
        return axios.get(
          `https://api.breezometer.com/air-quality/v2/current-conditions?lat=${
            this.state.lat
          }&lon=${
            this.state.lon
          }&key=${key}&features=breezometer_aqi,health_recommendations`
        )
      })
      .then(response => {
        // aqi: response.data.current.pollution.aqi;
        if (response.data !== null) {
          this.setState({
            aqi: response.data.data.indexes.baqi.aqi,
            info: { info: response.data.data.health_recommendations },
            risk: response.data.data.indexes.baqi.category.split(" ")[0],
            loaded: true
          })
        }
        // this.getSuggestions();
        // this.getRisk();
      })
      .catch(function(error) {
        console.log("Request failed", error)
      })
  }

  getSuggestions() {
    // let formated = {};
  }

  render() {
    return (
      <React.Fragment>
        <Col xs="12">
          <h1>Air Quality and Weather Forecast of {this.props.country}</h1>
        </Col>
        <Col
          sm="12"
          lg={{ size: 4, offset: 1 }}
          className="airQualityContainer"
        >
          {this.state.loaded && (
            <React.Fragment>
              <AirQualityPieChart aqi={this.state.aqi} max={100} rev={true} />
              <div className="aqinfo">
                <strong>{this.state.aqi}</strong>
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
    )
  }
}

export default AirQualityBr
