import { combineReducers } from 'redux';

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

export default combineReducers({
  videoreducer
});