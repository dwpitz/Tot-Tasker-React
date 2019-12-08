import React, { Component} from "react";
import { Header, Form, Label, Divider, Button } from "semantic-ui-react";

class LoginRegisterForm extends Component {
	constructor() {
		super();

		this.state = {
			familyName: "",
			password: "",
			action: "login"
		};
	}

	handleChange = (e) => {
		console.log("This is Handle Change");
    	this.setState({
      		[e.target.name]: e.target.value
    	});
    	console.log("Below is state after entering info");
    	console.log(this.state);
  	};

  	handleSubmit = (e) => {
  		console.log("This is Handle Submit");
    	e.preventDefault();
    	this.props.login(this.state);
  	};

	render() {
		return(
			<div>
				<Header>
					<h1> Tot Tasker </h1>
				</Header>

				<Form onSubmit={this.handleSubmit}>
					<Label>Family Name:</Label>
					<Form.Input
              			type="text"
              			name="familyName"
              			value={this.state.familyName}
              			onChange={this.handleChange}
            		></Form.Input>
					<Divider hidden />
					<Label>Password:</Label>
					<Form.Input
              			type="text"
              			name="password"
              			value={this.state.password}
              			onChange={this.handleChange}
            		></Form.Input>
					<Divider hidden />
					<Button type="Submit">
						Login
            		</Button>
            	</Form>
            	<small>
              		New To Tot Tasker? Sign up HERE.
            	</small>
			</div>
		)
	}
}


export default LoginRegisterForm;