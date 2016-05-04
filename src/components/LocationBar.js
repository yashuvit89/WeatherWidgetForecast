import React, { Component, PropTypes } from 'react';

export default class LocationBar extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { city, cityError } = this.props;

    return (
      <div className="">
        <div className="weather-city-label">{city.name}, {city.country}</div>
        <div className="error">{cityError}</div>
        <br />
      </div>
    );
  }
}