import React from 'react';
import Axios from 'axios';

class Signup extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			username: '',
			password: '',
			zipcode: 0
		}
		this.signup = this.signup.bind(this);
	}

	signup() {
		axios.post('/signup', {
			username: this.state.username,
			password: this.state.password,
			zipcodefrom: this.state.zipcode
		})
		.then((response) => {
			//route them somewhere
		})
		.catch((error) => {
			console.error(error)
		})
	}

	render(){
		return(<div>
			<form>
			Username: <input value={this.state.username} onChange={(event) => this.setState({username: event.target.value})}/>
			Password: <input value={this.state.password} onChange={(event) => this.setState({password: event.target.value})}/>
			Zipcode: <input value={this.state.zipcode} onChange={(event) => this.setState({zipcode: event.target.value})}/>
			<button type="submit" onClick={this.signup}>Sign Up!</button>
			</form>
		</div>)
	}
}

export default Signup;