import React from "react";
import { fetchSingleDay } from "../Api/ApiCall";
import { WeatherModel } from "../Models/WeatherModel";

interface GeoProps {
  latitude: string;
  longitude: string;
}

interface IGeoProps {
  data: WeatherModel;
}

class ShowWeather extends React.Component<GeoProps, IGeoProps> {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
    };
  }

  componentWillMount() {
    this.fetchMyAPI();
  }
  async fetchMyAPI() {
    let response = await fetchSingleDay(
      this.props.latitude,
      this.props.longitude,
      "metric"
    );
    this.setState({ data: response });
  }

  render() {
    return this.state.data != undefined && <h1>{this.state.data.base}</h1>;
  }
}

export default ShowWeather;
