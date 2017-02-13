import React, { Component, PropTypes } from 'react';

class Broadcast extends Component {
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
    return (
    	<div>
          	THIS IS VIDEO
			<video id="video" autoPlay="true" controls="true"></video>
			<div className="buttons-wrapper">
				<button id="button-play-gum" className="button-demo" onClick={this.startVideo} href="#">Play Video</button>
				<button id="button-stop-gum" className="button-demo" onClick={this.stopVideo}href="#">Stop Video</button>
			</div>
			<span id="gum-unsupported" className="hidden">API not supported</span>
			<span id="gum-partially-supported" className="hidden">API partially supported (video only)</span>
    	</div>
    );
  }
}

// Broadcast.propTypes = propTypes = {

// };

export default Broadcast;
