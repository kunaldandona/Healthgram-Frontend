import React, { Component } from "react";
// import weather from "npm-openweathermap";
import LiquidGauge from "../components/LiquidGauge";
import axios from "axios";
import { Col } from "reactstrap";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    };
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    if (this.props.show) {
      this.getWeather(this.props.country);
      if (!this.pollInterval) {
        this.pollInterval = setInterval(
          this.getWeather(this.props.country),
          2000
        );
      }
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.country !== prevProps.country) {
      this.getWeather(this.props.country);
    }
  }

  getWeather = searchText => {

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${"6c0a61ffaadf7eb42bd12639fe51b8c0"}`)
      .then(res => {
        const response = res.data;
        const { main: { temp, pressure, humidity }, weather, wind } = response;
        const { description } = weather[0];

        this.setState({
          loaded: true,
          temperature: temp - 273.15,
          pressure,
          humidity,
          wind: wind.speed,
          description
        });
      },
      error => {
        console.log(error);
      }
    );
  };

  render() {
    return (
      this.state.loaded && (
        <React.Fragment>
          <Col sm="12" lg="2" className="weatherContainer">
            <h4>Temperature</h4>
            <LiquidGauge
              id={"temperature"}
              percentage={(this.state.temperature / 40) * 100}
              value={this.state.temperature}
              unit={`\u00b0C`}
              startColor={"#0079FF"}
              endColor={"#0079FF"}
            />
          </Col>
          <Col sm="12" lg="2" className="weatherContainer">
            <h4>Humidity</h4>
            <LiquidGauge
              id={"humidity"}
              percentage={this.state.humidity}
              value={this.state.humidity}
              unit={"%"}
              startColor={"#FF5E62"}
              endColor={"#FF5E62"}
            />
          </Col>
          <Col sm="12" lg="2" className="weatherContainer">
            <h4>Wind</h4>
            <LiquidGauge
              id={"wind"}
              percentage={(this.state.wind / 20) * 100}
              value={this.state.wind}
              unit={"m/s"}
              startColor={"#FFC371"}
              endColor={"#FFC371"}
            />
          </Col>
        </React.Fragment>
      )
    );
  }
}

export default Weather;
