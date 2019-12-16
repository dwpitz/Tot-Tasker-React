import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container } from "semantic-ui-react";

class AddTots extends Component {
	constructor() {
		super();

		this.state = {
			name: "",
			image: ""
		};
	}

	handleChange = (e) => {
    	this.setState({
      		[e.target.name]: e.target.value
    	});

  	};

  	handleSubmit = (e) => {
    	e.preventDefault();
    	this.props.createTot(this.state);
      this.setState({
        name: "",
        image: ""
      })
  	};

	render(){
  	return(
  		<div>
				<Container>
				<Form className="addTotsForm" onSubmit={this.handleSubmit}>
					<Form.Field>
					<Label>Add Tot:</Label>
					<Form.Input
              			type="text"
              			name="name"
              			value={this.state.name}
              			onChange={this.handleChange}
            		></Form.Input>
            		</Form.Field>
            	</Form>
            	</Container>
			</div>
  		
  		)
  }
}

export default AddTots;