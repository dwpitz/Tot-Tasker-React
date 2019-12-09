import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container } from "semantic-ui-react";

class AddTots extends Component {
	constructor() {
		super();

		this.state = {
			child1: "",
			image1: "",
			child2: "",
			image2: "",
			child3: "",
			image3: "",
			child4: "",
			image4: "",
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
    	this.props.createTot(this.state);
  	};

	render(){
  	return(
  		<div>
				<Container>
				<Form className="" onSubmit={this.handleSubmit}>
					<Form.Field>
					<Label>Child 1:</Label>
					<Form.Input
              			type="text"
              			name="child1"
              			value={this.state.child1}
              			onChange={this.handleChange}
            		></Form.Input>
            		</Form.Field>
					<Divider hidden />
					<Form.Field>
					<Label>Image 1:</Label>
					<Form.Input
              			type="text"
              			name="image1"
              			value={this.state.image1}
              			onChange={this.handleChange}
            		></Form.Input>
            		<Divider hidden />
					<Label>Child 2:</Label>
					<Form.Input
              			type="text"
              			name="child2"
              			value={this.state.child2}
              			onChange={this.handleChange}
            		></Form.Input>
            		</Form.Field>
					<Divider hidden />
					<Label>Image 2:</Label>
					<Form.Input
              			type="text"
              			name="image2"
              			value={this.state.image2}
              			onChange={this.handleChange}
            		></Form.Input>
            		<Divider hidden />
            		<Form.Field>
            		<Label>Child 3:</Label>
					<Form.Input
              			type="text"
              			name="child3"
              			value={this.state.child3}
              			onChange={this.handleChange}
            		></Form.Input>
            		</Form.Field>
					<Divider hidden />
					<Label>Image 3:</Label>
					<Form.Input
              			type="text"
              			name="image3"
              			value={this.state.email}
              			onChange={this.image3}
            		></Form.Input>
            		<Divider hidden />
            		<Form.Field>
            		<Label>Child 4:</Label>
					<Form.Input
              			type="text"
              			name="child4"
              			value={this.state.child4}
              			onChange={this.handleChange}
            		></Form.Input>
            		</Form.Field>
					<Divider hidden />
					<Label>Image 4:</Label>
					<Form.Input
              			type="text"
              			name="image4"
              			value={this.state.image4}
              			onChange={this.handleChange}
            		></Form.Input>
            		<Divider hidden />
					<Button type="Submit">
						Add Tots
            		</Button>
            		<Divider hidden />
            	</Form>
            	</Container>
			</div>
  		
  		)
  }
}

export default AddTots;