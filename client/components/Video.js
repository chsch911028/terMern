import React, { Component } from 'react';

class Video extends Component {
	constructor(props) {
		super(props);	
		this.state = {
			text: ''
		}
		this.video.bind(this)
	}
 
  

	video(all){
		var that = this
		var result = []
		all.forEach(function(data, index){
			var title = data.snippet.title
			var url = 'https://www.youtube.com/embed/' + data.id.videoId
			var one = <div key={index} className="video-list-entry">
       				    <div >
       				      <div className="video-list-entry-title" onClick={ ()=>{that.chose(title, url)} }>{data.snippet.title}</div>
       				      <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + data.id.videoId} allowFullScreen></iframe>
     				    </div>
     				    <br />
     				  </div>
     		result.push(one)
		})
		return result
	}

	chose(title, url){
		this.props.select(title, url)
	}



	render(){
		return(
		       <div>
		   
		        <div className="vidd">
		       	 {this.video(this.props.all)}
		       	</div>
		 	   </div>
		)
	}
}

export default Video