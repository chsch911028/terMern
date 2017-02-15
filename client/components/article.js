import React, { Component } from 'react';
import {message} from './data';
class Article extends Component {
	constructor(props) {
		super(props);
		this.state = {
			update: false
		}
		this.Allarticle.bind(this)
	}



	Allarticle(){
	  var result =[]
	  var func = function(message){	
	  	message.forEach(function(mes, index){
	  		var one = <article key={index}>
	  					<h1 title=""><span>{mes.date[0]}</span><span>{mes.date[1]}</span><span>{mes.date[2]}</span></h1>
	  				    <div className='content'><p>{mes.title}</p><p>{mes.contents}</p></div>
	  				   </article>
	  		result.push(one)
	  	})
	  }
	  func(message)
	  return result
	}
   
    
  
	render() {
		return (
				<div>

				{this.Allarticle()}
				
				</div> 
		)
	}
}

export default Article