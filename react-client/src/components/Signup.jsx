import React from 'react';

class Signup extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			username: '',
			password: '',
			zipcode: 0
		}
		this.onChange = this.onChange.bind(this);
		this.signup = this.signup.bind(this);
	}

	onChange(e){
		e.preventDefault();
		//set state to the user's input
		this.setState({
			e.target.id: e.target.value
		})
	}

	signup(e) {
		e.preventDefault();
		//send the state on
	}

	render(){
		return(<div>
			<form>
			Username: <input value={this.state.username} onChange(e) => {this.onChange(e)}/>
			Password: <input value={this.state.password} onChange(e) => {this.onChange(e)}/>
			Zipcode: <input value={this.state.zipcode} onChange(e) => {this.onChange(e)}/>
			<button onClick={this.signup}>Signup</button>
			</form>
		</div>)
	}
}

export default Signup;