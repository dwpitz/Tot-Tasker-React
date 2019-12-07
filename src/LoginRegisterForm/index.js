import React, { Component} from "react";
import { Header, Form, Label, Divider } from "semantic-ui-react";

class LoginRegisterForm extends Component {
	constructor() {
		super();

		this.state = {
			familyName: "",
			email: "",
			password: "",
			action: "login"
		};
	}

	render() {
		return(
			<div>
				<Header>
					<h1> Tot Tasker </h1>
				</Header>
				<Label>Family Name:</Label>
				<Form.Input
              		type="text"
              		name="familyName"
              		// value={this.state.full_name}
              		// onChange={this.handleChange}
            ></Form.Input>

				<Divider hidden />
				<Label>Email:</Label>
				<Form.Input
              		type="text"
              		name="email"
              		// value={this.state.full_name}
              		// onChange={this.handleChange}
            ></Form.Input>
				<Divider hidden />
				<Label>Password:</Label>
				<Form.Input
              		type="text"
              		name="password"
              		// value={this.state.full_name}
              		// onChange={this.handleChange}
            ></Form.Input>
				<Divider hidden />	
			</div>
		)
	}
}


export default LoginRegisterForm;