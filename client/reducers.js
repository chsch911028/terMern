/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers


var initstate = {
	videostream: null,
	video: null
}

function videoreducer(state = initstate, action){
	switch (action.type) {
		default:
			return state
	}

}
// Combine all reducers into one root reducer
export default combineReducers({
 videoreducer
});
