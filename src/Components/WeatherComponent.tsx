import React from 'react';
import { GeolocatedProps, geolocated } from "react-geolocated";


class WeatherComponent extends React.Component<GeolocatedProps> {

  render() {
    return (
      <div>
          latitude: {this.props.coords && this.props.coords.latitude} 
          longtitude: {this.props.coords && this.props.coords.longitude}
      </div>
    );
  }
}

export default geolocated()(WeatherComponent);
