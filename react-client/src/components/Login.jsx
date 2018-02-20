import React from 'react';

class Login extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			username: '',
			password: ''
		}
		this.onChange = this.onChange.bind(this);
		this.login = this.login.bind(this);
	}

	onChange(e){
		e.preventDefault();
		//set state to the user's input
		this.setState({
			e.target.id: e.target.value
		})
	}

	login(e) {
		e.preventDefault();
		//send the state on
	}

	render(){
		return(<div>
			<form>
			Username: <input value={this.state.username} onChange(e) => {this.onChange(e)}/>
			Password: <input value={this.state.password} onChange(e) => {this.onChange(e)}/>
			<button onClick={this.login}>Login</button>
			</form>
		</div>)
	}
}

export default Login;