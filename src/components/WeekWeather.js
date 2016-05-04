import React, { Component, PropTypes } from 'react';
import getDay  from '../utils/weekUtil';

export default class WeekWeather extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const forecastDay = getDay(this.props.dt);
    const { actions } = this.props;

    return (
      <a href="#!" className="collection-item weekDay col s2 day" id={this.props.indexForSelection}
        onClick={e => {
         e.preventDefault();
         actions.selectDay(this.props.indexForSelection + 1);
       }}>
        <div className="">
          <div className="">{forecastDay}</div>
          <div className="">
            <img src={"http://openweathermap.org/img/w/" + this.props.weather[0].icon + ".png"} alt="" />
          </div>
          <div className="min">{this.props.temp.min} °C</div>
          <div className="max">{this.props.temp.max} °C</div>
          <div className="details">{this.props.weather[0].description}</div>
          <br />
        </div>
      </a>
    );
  }
}