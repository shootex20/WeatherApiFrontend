import React from 'react';
import { GeolocatedProps, geolocated } from "react-geolocated";
import './App.css';
import WeatherComponent from './Components/WeatherComponent';


class App extends React.Component {

  render() {
    return (
      <WeatherComponent/>
    );
  }
}

export default geolocated()(App);
