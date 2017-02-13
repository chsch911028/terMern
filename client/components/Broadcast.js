import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from 'muicss/lib/react/button';


class broadcast extends Component {
	constructor(props){
		super(props);
		// this.state ={
		// 	videoStream : null,
		// 	video : document.getElementById("video")
		// }
	}

	startVideo(){
		var videoStream = null;
		var createSrc = window.URL ? window.URL.createObjectURL : function(stream) {return stream;};
		var video = document.getElementById("video");
		navigator.getUserMedia({
			video: true,
			audio: true
		},
		function(stream) {
			videoStream = stream;
			// Stream the data
			video.src = createSrc(stream);
			video.play();
		},
		function(error) {
			console.log("Video capture error: ", error.code);
		});
	}

	stopVideo(){
		var video = document.getElementById("video");
		video.pause();
		// has to stop video by making an action to remove videoStream at handleClick



	}

  render() {
  	let style = {backgroundColor:'#fdd835'};
    return (
    	<div>
          	THIS IS VIDEO
			<video id="video" autoPlay="true" controls="true"></video>
			<div className="buttons-wrapper">
				<Button variant="raised" style={style} id="button-play-gum" className="button-demo" onClick={this.startVideo} href="#">Play Video</Button>
				<Button variant="raised" style={style} id="button-stop-gum" className="button-demo" onClick={this.stopVideo}href="#">Stop Video</Button>
			</div>
			<span id="gum-unsupported" className="hidden">API not supported</span>
			<span id="gum-partially-supported" className="hidden">API partially supported (video only)</span>
    	</div>
    );
  }
}

let mapStateToProps = function(state){
	return {
		videoreducer: state.videoreducer
	}
}

const Broadcast = connect(
  mapStateToProps
)(broadcast)

export default Broadcast;
