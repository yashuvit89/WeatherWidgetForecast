import React, { Component, PropTypes } from 'react';
import LocationBar from '../components/LocationBar';

export default class Weather extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const { weather, actions } = this.props;
    actions.fetchWeather(weather.city);
    // dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  render() {
    let input;
    const { weather } = this.props;

    return (
      <div className="counter-container">
        <LocationBar city={weather.city} />
        <div className="counter-num-label">
          <form onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              this.props.actions.fetchWeather(input.value)
              input.value = ''
            }}>
              <input ref={node => {
                input = node
              }} />
              <button type="submit">
                Get Weather
              </button>
          </form>
        </div>
        <br />
        <div className="counter-buttons">
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  // weather: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};
