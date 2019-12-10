import React, { Component} from "react";
import { Header, Form, Label, Divider, Button } from "semantic-ui-react";

class LoginForm extends Component {
	constructor() {
		super();

		this.state = {
			familyName: "",
			password: "",
			action: "login",
			loadRegistration: false
		};
	}

	handleChange = (e) => {
    	this.setState({
      		[e.target.name]: e.target.value
    	});
  	};

  	handleSubmit = (e) => {
    	e.preventDefault();
    	this.props.login(this.state);
      this.setState({
        familyName: "",
        password: "",
        action: "login",
        loadRegistration: false
      })
  	};


    

  	switchForm = () => {
  		this.props.loadRegistrationScreen()
  		
  	}
  	

	render() {
		return(
			<div>

				<Form className="loginForm" onSubmit={this.handleSubmit}>
					<Label>Family Name:</Label>
					<Form.Input
              			type="text"
              			name="familyName"
                    placeholder='Family Name'
                    icon='users'
              			value={this.state.familyName}
              			onChange={this.handleChange}
            		></Form.Input>
					<Divider hidden />
					<Label>Password:</Label>
					<Form.Input
              			type="password"
              			name="password"
                    placeholder='Password'
              			value={this.state.password}
              			onChange={this.handleChange}
            		></Form.Input>
					<Divider hidden />
					<Button type="Submit">
						Login
            		</Button>
            		<Divider hidden />
            		<small>
              		New To Tot Tasker? {" "}.
              		<span onClick={this.switchForm}>SIGN UP HERE</span>
            	</small>
            	</Form>
			</div>
		)
	}
}


export default LoginForm;