import React, { Component } from "react"
import axios from "axios"
// import MainMap from "../components/MainMap";
import GoogleMaps from "../components/GoogleMaps"

const mapStyle = require("../static/map.json")

const key = `${process.env.REACT_APP_PLACE_KEY}`

class MapHandle extends Component {
  state = {
    currentLatLng: {
      lat: 35.86166,
      lng: 104.195397
    },
    center: {
      lat: 35.86166,
      lng: 104.195397
    },
    isMarkerShown: true,
    loading: true,
    showData: false
  }

  componentDidMount() {
    // this.searchPlaces(this.props.country);
    // if (!this.pollInterval) {
    //   this.pollInterval = setInterval(
    //     this.searchPlaces(this.props.country),
    //     2000
    //   );
    // }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.country !== prevProps.country) {
      this.searchPlaces(this.props.country)
    }
  }

  searchPlaces = place => {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place}&inputtype=textquery&fields=geometry&key=${key}`
      )
      .then(res => {
        // console.log("the response", res)
        const newLngLat = res.data.candidates[0].geometry.location
        this.setState({
          currentLatLng: newLngLat,
          center: newLngLat,
          value: place,
          showData: true //, isMarkerShown: true
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      // <MainMap
      //   latitude={this.state.currentLocation.latitude}
      //   longitude={this.state.currentLocation.longitude}
      // />

      <GoogleMaps
        isMarkerShown
        latLng={this.state.currentLatLng}
        center={this.state.center}
        style={mapStyle}
      />
    )
  }
}

export default MapHandle
