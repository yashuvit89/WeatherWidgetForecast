import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as WeatherActions from '../actions/WeatherActions';
import Weather from '../components/Weather';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    const { weather, actions } = this.props;
    return (
      <div className="card main-app-container">
        <Weather weather={weather} actions={actions}/>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(WeatherActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
