import React, { Component} from "react";
import { Form, Header } from "semantic-ui-react";

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
			</div>
		)
	}
}


export default LoginRegisterForm;