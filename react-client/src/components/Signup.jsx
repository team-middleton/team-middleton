import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Signup extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			username: '',
			password: '',
			zipcode: ''
		}
		this.signup = this.signup.bind(this);
	}

	signup(event) {
		event.preventDefault()
		axios.post('/signup', {
			username: this.state.username,
			password: this.state.password,
			zipcode: this.state.zipcode
		})
		.then((response) => {
			console.log('You\'re signed up! Now just log in.')
		})
		.catch((error) => {
			console.error(error)
		})
	}

	render(){
		return (
			<div>
				<form>
				Username: <input value={this.state.username} onChange={(event) => this.setState({username: event.target.value})}/>
				Password: <input value={this.state.password} onChange={(event) => this.setState({password: event.target.value})}/>
				Zipcode: <input value={this.state.zipcode} onChange={(event) => this.setState({zipcode: event.target.value})}/>
				<button type="submit" onClick={(event) => {this.signup(event)}}>Sign Up!</button>
				</form>
			</div>
		)
	}
}

export default Signup;