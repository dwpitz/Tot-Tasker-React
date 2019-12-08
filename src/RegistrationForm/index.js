import React, { Component} from "react";
import { Header, Form, Label, Divider, Button } from "semantic-ui-react";

class RegistrationForm extends Component {
	constructor() {
		super();

		this.state = {
			familyName: "",
			email: "",
			password: "",
			admin1: "",
			admin2: "",
			admin3: "",
			action: "register"
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
    	this.props.register(this.state);
  	};

  	switchForm = () => {
  		this.props.loginForm() 		
  	}

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
					<Label>Email:</Label>
					<Form.Input
              			type="text"
              			name="email"
              			value={this.state.email}
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
					<Label>Additional Admin 1:</Label>
					<Form.Input
              			type="text"
              			name="admin1"
              			value={this.state.admin1}
              			onChange={this.handleChange}
            		></Form.Input>
            		<Divider hidden />
					<Label>Additional Admin 2:</Label>
					<Form.Input
              			type="text"
              			name="admin2"
              			value={this.state.admin2}
              			onChange={this.handleChange}
            		></Form.Input>
            		<Divider hidden />
					<Label>Additional Admin 3:</Label>
					<Form.Input
              			type="text"
              			name="admin3"
              			value={this.state.admin3}
              			onChange={this.handleChange}
            		></Form.Input>
					<Divider hidden />
					<Button type="Submit">
						Register
            		</Button>
            	</Form>
            	<small>
              		Already have an account? {" "}.
              		<span onClick={this.switchForm}>LOGIN HERE</span>
            	</small>
			</div>
		)
	}
}


export default RegistrationForm;