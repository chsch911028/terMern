import React, { Component } from 'react';
import {message} from './data';
import Video from './Video';
import axios from 'axios';
import Plus from './plus.svg'
import Sear from './Sear.svg'

class Newarti extends Component {
	constructor(props) {
		super(props);
		this.state = {
			all: [],
			query: '',
			key: 'AIzaSyDNMwHykQP2gkGtrq1WSVG6s3Sw3q4Kc94',
			title: '',
			url: '',
			comments: '',
			area: false
		}

		
	}

    searchyou(){

      var that = this
      axios.get('https://www.googleapis.com/youtube/v3/search', {
      	params: { key: this.state.key, 
      		      q: this.state.query, maxResults: 5, 
      		      type:"video", 
      		      videoEmbeddable: 'true', 
      		      part: 'snippet' }
        })
      .then(function(argu){
      	that.setState({
      	  	all: argu.data.items
      	})
     

      })
      .catch(function(error){
      	console.log(error)
      })
   
    }

    save(){
    	 var nd = new Date()
    	 var nd2 = nd.toString().split(" ")
	     var colum = {}
	     colum.date = [] 
	     colum.date.push(nd2[2])
	     colum.date.push(nd2[1])
	     colum.date.push(nd2[3])
	     colum.title = this.state.title
	     colum.contents = this.state.comments
	     colum.youtube = this.state.url
	     message.unshift(colum)
	     this.props.changepage()
	   
    }

    selectrock(a, b){
    	this.setState({
    		title: a,
    		url: b
    	})
    }

    addtext(e){
    	this.setState({
    		query: e.target.value
    	})
    }

    addcomment(e){
    	this.setState({
    		comments: e.target.value
    	})
    }

    videostate(){
    	this.setState({
    		area: true
    	})
    }
   

   

	render(){
		return (
			<div>
			  {!this.state.area &&
			  	<div>
			      <div className="headar">
			        <textarea className="textarea" placeholder="Rock will never die" onChange={(e)=>this.addcomment(e)}></textarea>
			      </div>
			      <div className="plus" onClick={this.videostate.bind(this)}>
			      	<img src={Plus} />
			      </div>
			    </div>
			    
			  }
			  { this.state.area &&
			  	 <div>

			  	  <div className="wrap">
  					<div>
 					 <input className="searchnew" name="search" type="text" placeholder="What're we looking for ?" onChange={(e)=>this.addtext(e)}/>
 					 <div onClick={this.searchyou.bind(this)} >
 					   <input className="submitnew" value="Rechercher" type="submit"/>
 					 </div>
 				    </div>
				  </div>
				  <div className="videoarea">
			       {this.state.all.length > 0 && <Video all={this.state.all} select={this.selectrock.bind(this)} />}
			     </div>

				   <div className="plus" onClick={this.save.bind(this)}>
			      	<img src={Plus} />
			      </div>
			    


			

			   
			   </div>
			  }
			</div>
		)

	}
}

export default Newarti
