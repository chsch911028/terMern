import React, { Component } from 'react';
import './css/style.css'
import axios from 'axios';
import {user} from '../Components/data'
import { connect } from 'react-redux';
import { detect } from 'actions';

class login extends Component {

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
    var us = { 
          username: this.state.username,
          password: this.state.password 
    }
    axios.post('http://localhost:8000/api/signin', us)
      .then(function(argu){
       
        console.log(that.props)
        that.props.detect(argu.data.token)
        that.props.auth()
      })
      .catch(function(error){
        console.log(error)
      })




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

let mapStateToProps = function(state){
  return {
    videoreducer: state.videoreducer
  }
}

let mapDispatchToProps = function(dispatch){
    return {
        detect: (token) => dispatch(detect(token))
    }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(login)

export default Login


  

