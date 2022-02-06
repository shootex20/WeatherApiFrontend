import React from 'react';
import { GeolocatedProps, geolocated } from "react-geolocated";
import './App.css';
import WeatherComponent from './Components/WeatherComponent';
import { fetchAddition } from './Api/ApiCall';

class App extends React.Component {
  //const c = fetchAddition("calgary", "C");
  render() {
    return (
      <WeatherComponent/>
    );
  }
}

export default geolocated()(App);
