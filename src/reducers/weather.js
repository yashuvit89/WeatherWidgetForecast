import { CHANGE_CITY, REQUEST_WEATHER,
 RECEIVE_WEATHER, ADD_CITY, NO_CITY
} from '../constants/ActionTypes';

const initialState = {
	// city: 'paris',
  forecast: {
    city : {name : 'Paris', country: 'FR'},
    list : [ {
      temp: {day : ''},
      weather: [{icon: "01d"}]
    }]
  }
}

export default function weatherApp(state = initialState, action) {
	switch (action.type) {
		case CHANGE_CITY:
			return Object.assign({}, state, {
				city: action.city,
				currentTemperature: action.currentTemperature
			})
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        forecast: action.forecast,
        cityError: ""
      })
    case NO_CITY:
      return Object.assign({}, state, {
        cityError: "No City Found"
      })

		default:
			return state;
	}
}