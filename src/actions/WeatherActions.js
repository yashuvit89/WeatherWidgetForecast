import fetch from 'isomorphic-fetch'

import { 
	CHANGE_CITY, REQUEST_WEATHER, 
	RECEIVE_WEATHER, ADD_CITY, NO_CITY
	} from '../constants/ActionTypes';

export function requestWeather(city) {
  return {
    type: REQUEST_WEATHER,
    city
  }
}

export function receiveWeather(city, json) {
  return {
    type: RECEIVE_WEATHER,
    city,
    forecast: json,
    receivedAt: Date.now()
  }
}

export function noCityFound() {
	return {
		type: NO_CITY
	}
}

export function fetchWeather(city) {
  return dispatch => {
    dispatch(requestWeather(city))
    return fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&units=metric&appid=61f69224001e7285e9d3192200613595`)
      .then(response => response.json())
      .then(json => {
      	json.cod === "200" ? dispatch(receiveWeather(city, json)) : dispatch(noCityFound(city, json))
      })
  }
}