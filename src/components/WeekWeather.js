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

      <li className="card weekDay col s2 day">
        <div className="">
          <div className="">{forecastDay}</div>
          <div className="">
            <img src={"http://openweathermap.org/img/w/" + this.props.weather[0].icon + ".png"} alt="" />
          </div>
          <div className="">Day: {this.props.temp.day}</div>
          <div className="">Min: {this.props.temp.min}</div>
          <div className="">Max: {this.props.temp.max}</div>
          <div className="">Weather: {this.props.weather[0].description}</div>
          <br />
        </div>
      </li>
    );
  }
}