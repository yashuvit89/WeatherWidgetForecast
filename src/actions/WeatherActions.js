import fetch from 'isomorphic-fetch'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

import { 
	CHANGE_CITY, REQUEST_WEATHER, 
	RECEIVE_WEATHER, ADD_CITY
	} from '../constants/ActionTypes';

export function changeCity (city) {
  return {
    type: CHANGE_CITY,
    city
  };
}

export function addCity (city) {
	return {
		type: ADD_CITY,
		city
	}
}

// export function requestWeather (city) {
// 	return {
// 		type: REQUEST_WEATHER,
// 		city
// 	}
// }

// export function receiveWeather (city, json) {
// 	return {
// 		type: RECEIVE_WEATHER,
// 		city,
// 		currentTemperature: json,
// 		receivedAt: Date.now()
// 	}
// }

// export function fetchWeather(city) {
//   return dispatch => {
//     dispatch(requestPosts(reddit))
//     return fetch(`http://api.apixu.com/v1/forecast.json?key=196bce54f7d648bdabe165723160205&q=${city}`)
//       .then(response => response.json())
//       .then(json => dispatch(receivePosts(reddit, json)))
//   }
// }

export function requestWeather(city) {
  return {
    type: REQUEST_POSTS,
    city
  }
}

export function receiveWeather(city, json) {
  return {
    type: RECEIVE_POSTS,
    city,
    forecast: json,
    receivedAt: Date.now()
  }
}

export function fetchWeather(city) {
  return dispatch => {
  	dispatch(changeCity(city))
    dispatch(requestWeather(city))
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&appid=61f69224001e7285e9d3192200613595&cnt=6`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(city, json)))
  }
}