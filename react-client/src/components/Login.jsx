import React from 'react';
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

	login(e) {
		axios.post('/login', {
			username: this.state.username,
			password: this.state.password
		})
		.then((response) => {
			//route them somewhere and change App's state to logged in
		})
		.catch((err) => {
			console.error(err)
		})
	}

	render(){
		return(<div>
			<form>
			Username: <input value={this.state.username} onChange={(event) => this.setState({username: event.target.value})}/>
			Password: <input value={this.state.password} onChange={(event) => this.setState({password: event.target.value})}/>
			<button type="submit" onClick={this.login}>Login</button>
			</form>
		</div>)
	}
}

export default Login;