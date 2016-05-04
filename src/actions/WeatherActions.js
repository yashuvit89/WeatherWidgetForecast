import fetch from 'isomorphic-fetch'

import { 
	CHANGE_CITY, REQUEST_WEATHER, 
	RECEIVE_WEATHER, ADD_CITY, NO_CITY
	} from '../constants/ActionTypes';

// export function changeCity (city) {
//   return {
//     type: CHANGE_CITY,
//     city
//   };
// }

export function addCity (city) {
	return {
		type: ADD_CITY,
		city
	}
}

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
	console.log(city);
  return dispatch => {
  	// dispatch(changeCity(city))
    dispatch(requestWeather(city))
    // return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&mode=json&appid=61f69224001e7285e9d3192200613595&cnt=6`)
    return fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=6&units=metric&appid=61f69224001e7285e9d3192200613595`)
      .then(response => response.json())
      .then(json => {
      	json.cod === "200" ? dispatch(receiveWeather(city, json)) : dispatch(noCityFound(city, json))
      })
  }
}