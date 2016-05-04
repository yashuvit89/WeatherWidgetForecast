import { CHANGE_CITY, REQUEST_WEATHER,
 RECEIVE_WEATHER, ADD_CITY,
 REQUEST_POSTS, RECEIVE_POSTS, SELECT_REDDIT, INVALIDATE_REDDIT
} from '../constants/ActionTypes';

const initialState = {
	city: 'paris',
	currentTemperature: '0'
	// cities: []
}

export default function weatherApp(state = initialState, action) {
	switch (action.type) {
		case CHANGE_CITY:
			return Object.assign({}, state, {
				city: action.city,
				currentTemperature: action.currentTemperature
			})
    case INVALIDATE_REDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })

		default:
			return state;
	}
}