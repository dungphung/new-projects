import React, { Component } from "react";

import { getWeather } from "../../redux/actions";
import { connectAutoDispatch } from "../../utils";

class WeatherPage extends Component {
  state = {
    weather: []
  };
  componentDidMount() {
    this.props.getWeather("London,uk");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      weather: nextProps.weather
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Weathe Page</h1>
      </div>
    );
  }
}

export default connectAutoDispatch(state => ({ weather: state.WeatherReducer.weather }), {
  getWeather
})(WeatherPage);
