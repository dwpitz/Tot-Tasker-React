import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container } from "semantic-ui-react";

class AddTots extends Component {
	constructor() {
		super();

		this.state = {
			child1: "",
			image1: "",
			// child2: "",
			// image2: "",
			// child3: "",
			// image3: "",
			// child4: "",
			// image4: "",
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
          <Button type="Submit">
            Add Tots
                </Button>
                <Divider hidden />
            		</Form.Field>
					
          
            	</Form>
            	</Container>
			</div>
  		
  		)
  }
}

export default AddTots;