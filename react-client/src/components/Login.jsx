import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Login extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			username: '',
			password: ''
		}
		this.login = this.login.bind(this);
	}

	login(event) {
		event.preventDefault()
		axios.post('/login', {
			username: this.state.username,
			password: this.state.password
		})
		.then((response) => {
			this.props.login()
		})
		.catch((err) => {
			console.error(err)
			alert('username or password not valid!')
			this.setState({
				username: '',
				password: ''
			})
		})
	}

	render(){
		return (
			<div className="login">
				<form>
					Username: <input value={this.state.username} onChange={(event) => this.setState({username: event.target.value})}/>
					Password: <input type='password' value={this.state.password} onChange={(event) => this.setState({password: event.target.value})}/>
					<button type="submit" onClick={(event) => {this.login(event)}}>Login</button>
				</form>
			</div>
		)
	}
}

export default Login;