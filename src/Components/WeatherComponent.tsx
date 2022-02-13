import React, { useEffect, useState } from "react";
import { GeolocatedProps, geolocated } from "react-geolocated";
import { fetchSingleDay } from "../Api/ApiCall";
import { WeatherModel } from "../Models/WeatherModel";
import ShowWeather from "./ShowWeather";

interface GeoProps {
  latitude: string;
  longitude: string;
}

interface IGeoProps {
  data: WeatherModel;
}

class WeatherComponent extends React.Component<GeolocatedProps> {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div>
        <ShowWeather
          latitude={this.props.coords.latitude}
          longitude={this.props.coords.longitude}
        />
      </div>
    ) : (
      <div>Getting the location data&hellip; </div>
    );
  }
}

// class ShowWeather extends React.Component<GeoProps, IGeoProps> {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: undefined,
//     };
//   }

//   componentWillMount() {
//     this.fetchMyAPI();
//   }
//   async fetchMyAPI() {
//     let response = await fetchSingleDay(
//       this.props.latitude,
//       this.props.longitude,
//       "metric"
//     );
//     this.setState({ data: response });
//   }

//   render() {
//     return this.state.data != undefined && <h1>{this.state.data.base}</h1>;
//   }
// }
export default geolocated()(WeatherComponent);
