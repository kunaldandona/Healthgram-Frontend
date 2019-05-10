import React from "react"
import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"

// var markerStyling = {
//   clear: "both",
//   display: "absolute",
//   backgroundColor: "#00921A",
//   fontWeight: "500",
//   color: "#FFFFFF",
//   boxShadow: "0 6px 8px 0 rgba(63,63,63,0.11)",
//   borderRadius: "23px",
//   padding: "8px 16px",
//   whiteSpace: "nowrap",
//   width: "160px",
//   textAlign: "center"
// };

import marker from "../../../assets/marker.svg"
const key = `${process.env.REACT_APP_MAP_KEY}`

const maps = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?libraries=places&key=${key}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  let { latLng } = props
  let { lat, lng } = latLng

  let markerPosition = {
    lat: lat - 1.8,
    lng: lng
  }

  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={props.center}
      center={props.center}
      defaultOptions={{
        styles: props.style
      }}
    >
      {props.isMarkerShown && (
        <Marker
          position={markerPosition}
          // icon={{
          // url: {marker},
          // scaledSize: {width: 30, height: 30},
          // anchor: {x: 15, y: 15 },
          // }}
          icon={{ url: marker }}
        />
      )}
    </GoogleMap>
  )
})

export default maps
