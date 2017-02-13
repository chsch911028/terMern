

import React, { Component } from 'react';
import './css/style.css'
import {user} from '../Components/data'
class Login extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		username: '',
  		password: ''
  	}
  }

  changename(e){
  	this.setState({
  		username: e.target.value
  	})
  }

  changepassword(e){
  	this.setState({
  		password: e.target.value
  	})
  }

  detectpassword(){
  	var that = this
  	var TF = false
  	user.forEach(function(obj){
  
  		if (obj.username === that.state.username && obj.password === that.state.password) {
  			TF = true
  		}
  	})
  	if (TF) {
  		this.props.auth()
  	} else {
  		alert("죄송합니다. 아직 저희의 고객이 아니시네요.")
  	}
  }

  render(){

  	return(
  	   <div>
  	    <div className="body"></div>
		<div className="grad"></div>
		<div>
			<div className="header">
				<div>Shop <span>Ter</span></div>
			</div>
			<div className="login">
					<input type="text" onChange={(e)=>{this.changename.bind(this)(e)}} placeholder="username" name="user" /><br />
					<input type="password" onChange={(e)=>{this.changepassword.bind(this)(e)}} placeholder="password" name="password" /><br />
					<input type="button" value="Login" onClick={this.detectpassword.bind(this)}/>
			</div>
		</div>
	  </div>
	 
	)
  }

}

export default Login


  

