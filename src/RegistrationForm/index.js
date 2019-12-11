import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container } from "semantic-ui-react";

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
  	};

  	handleSubmit = (e) => {
  		console.log("This is Handle Submit");
    	e.preventDefault();
    	this.props.register(this.state);
      this.setState({
        familyName: "",
        email: "",
        password: "",
        admin1: "",
        admin2: "",
        admin3: "",
        action: "register"
      })
  	};

  	switchForm = () => {
  		this.props.loadLoginForm() 		
  	}

	render() {
		return(
			<div>
				<Container>
				<Form className="registrationForm" onSubmit={this.handleSubmit}>
					<Form.Field>
					<Label>Family Name:</Label>
					<Form.Input
              			type="text"
              			name="familyName"
              			value={this.state.familyName}
              			onChange={this.handleChange}
            		></Form.Input>
            		</Form.Field>
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
            		<Divider hidden />
            	<small>
              		Already have an account? {" "}.
              		<span onClick={this.switchForm}>LOGIN HERE</span>
            	</small>
            	</Form>
            	</Container>
			</div>
		)
	}
}


export default RegistrationForm;