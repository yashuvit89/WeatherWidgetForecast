import React, { Component, PropTypes } from 'react';
import LocationBar from '../components/LocationBar';
import WeekWeather from '../components/WeekWeather';
import getDay from '../utils/weekUtil';

export default class Weather extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const { weather, actions } = this.props;
    actions.fetchWeather(weather.forecast.city.name);
    // dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  render() {
    let input;
    const { weather } = this.props;
    const { forecast } = weather;
    const currentDay = forecast.list[0]; //First list is the current day
    const restWeek = forecast.list.slice(1);
    const currentDayName = getDay(currentDay.dt);
    return (
      <div className="card counter-container">
        <div className="counter-num-label">
          <form onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              this.props.actions.fetchWeather(input.value)
              input.value = ''
            }}>
              <input placeholder="Enter City" ref={node => {
                input = node
              }} />
              <button type="submit">
                Get Weather
              </button>
          </form>
        </div>
        <LocationBar city={forecast.city} cityError={weather.cityError}/>
        <br />
        <div className="temperature">
          {currentDay.temp.day}, {currentDayName}
        </div>
        
        <h3> Forecast for the week </h3>
        <ul className="weekList">
          {restWeek.map(day =>
            <WeekWeather key={day.dt} {...day}/>
          )}
        </ul>
      </div>
    );
  }
}

Weather.propTypes = {
  // weather: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};
