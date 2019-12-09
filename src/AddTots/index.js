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
  	};

	render(){
  	return(
  		<div>
				<Container>
				<Form className="" onSubmit={this.handleSubmit}>
					<Form.Field>
					<Label>Add Tot:</Label>
					<Form.Input
              			type="text"
              			name="name"
              			value={this.state.name}
              			onChange={this.handleChange}
            		></Form.Input>
            		</Form.Field>
					<Divider hidden />
					<Form.Field>
					<Label>Add Image:</Label>
					<Form.Input
              			type="text"
              			name="image"
              			value={this.state.image}
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