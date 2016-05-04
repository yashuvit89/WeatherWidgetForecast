import React, { Component, PropTypes } from 'react';
import getDay  from '../utils/weekUtil';

export default class WeekWeather extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    // const { city, cityError } = this.props;
    // const days = {0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'};
    // const day = new Date(this.props.dt * 1000).getDay();
    const forecastDay = getDay(this.props.dt);

    return (

      <li className="day">
        <div className="card counter-container">
          <div className="counter-num-label">{forecastDay}</div>
          <div className="counter-num-label">{this.props.temp.day}</div>
          <br />
        </div>
      </li>
    );
  }
}