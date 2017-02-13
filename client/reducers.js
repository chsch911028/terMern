/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers


var initstate = {
	videostream: null,
	video: null
}

var auth = {
	token: "123123" 
}

function videoreducer(state = initstate, action){
	switch (action.type) {
		default:
			return state
	}
}

function Auth(state = auth, action){
	switch (action.type) {
		case "login":
			return Object.assign({}, state, {
				token: action.token
			})
		default:
			return state
	}
}
// Combine all reducers into one root reducer
export default combineReducers({
 videoreducer,
 Auth
});
