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
      <div className="weather">
        <div className="row">
          <div className="col s7">
             <LocationBar city={forecast.city} cityError={weather.cityError}/>
          </div>
          <div className="col s5">
            <div className="row">
              <form onSubmit={e => {
                  e.preventDefault()
                  if (!input.value.trim()) {
                    return
                  }
                  this.props.actions.fetchWeather(input.value)
                  input.value = ''
                }}>
                <div className="file-field input-field">
                  <input className="col s8" placeholder="Change City" ref={node => {
                    input = node
                  }} />
                  <button className="col s4 btn waves-effect waves-light submitCity" type="submit">
                    Submit
                  </button>
                 </div> 
              </form>
            </div>
          </div>
        </div>
        <br />
        <div className="row temperature">
         <img src={"http://openweathermap.org/img/w/" + currentDay.weather[0].icon + ".png"} alt="" />

          {currentDay.temp.day}, {currentDayName}
        </div>
        <div className="row">
        <h5> Forecast for the week </h5>
          <ul className="weekList">
            {restWeek.map(day =>
              <WeekWeather className="row" key={day.dt} {...day}/>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  // weather: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};
