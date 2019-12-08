import React, { Component} from "react";

class addTots extends Component {
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

	render(){
  	return(
  		<div>
				<Container>
				<Form className="registrationForm" onSubmit={this.handleSubmit}>
					<Form.Field>
					<Label>Child 1:</Label>
					<Form.Input
              			type="text"
              			name="child1"
              			// value={this.state.familyName}
              			// onChange={this.handleChange}
            		></Form.Input>
            		</Form.Field>
					<Divider hidden />
					<Label>Image 1:</Label>
					<Form.Input
              			type="image"
              			name="image1"
              			// value={this.state.email}
              			// onChange={this.handleChange}
            		></Form.Input>
            		<Divider hidden />
					<Label>Child 2:</Label>
					<Form.Input
              			type="text"
              			name="child2"
              			// value={this.state.familyName}
              			// onChange={this.handleChange}
            		></Form.Input>
            		</Form.Field>
					<Divider hidden />
					<Label>Image 2:</Label>
					<Form.Input
              			type="image"
              			name="image2"
              			// value={this.state.email}
              			// onChange={this.handleChange}
            		></Form.Input>
            		<Divider hidden />
            		<Label>Child 3:</Label>
					<Form.Input
              			type="text"
              			name="child3"
              			// value={this.state.familyName}
              			// onChange={this.handleChange}
            		></Form.Input>
            		</Form.Field>
					<Divider hidden />
					<Label>Image 3:</Label>
					<Form.Input
              			type="image"
              			name="image3"
              			// value={this.state.email}
              			// onChange={this.handleChange}
            		></Form.Input>
            		<Divider hidden />
            		<Label>Child 4:</Label>
					<Form.Input
              			type="text"
              			name="child1"
              			// value={this.state.familyName}
              			// onChange={this.handleChange}
            		></Form.Input>
            		</Form.Field>
					<Divider hidden />
					<Label>Image 4:</Label>
					<Form.Input
              			type="image"
              			name="image4"
              			// value={this.state.email}
              			// onChange={this.handleChange}
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

export default addTots;