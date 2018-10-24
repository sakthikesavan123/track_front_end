import React, { Component } from 'react';
import './login.css' 

export default class Login extends React.Component {
	constructor(){
		super();
		this.state = {
			user:{
				Name: String,
				Password :Text
			}
		}
	}

	render() {
		return (
			<div class="login">
					<center class='login_body'> Login
							<form>
								<div>
									<span>User Name:</span>
									<span><input type='text' value={this.state.user.Name}></input></span>
								</div>
								<div>
									<span>Password:</span>
									<span><input type='text' value={this.state.user.Password}></input></span>
								</div>
								<button type="button"></button>
							</form>
					</center>
			</div>
		)
	}
}