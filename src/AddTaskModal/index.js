import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container, Modal } from "semantic-ui-react";

class AddTaskModal extends Component {
	constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      tot: "",
      reward: "",
      coundownToCompletion: "",
      countSoFar: ""
    };
  }

  render() {
  	// const totsList = 
    return (
      <Modal
        open={this.props.editModalOpen}
        closeIcon
        onClose={this.props.closeModal}
      >
        <Header>ADD TASKS</Header>
        <Modal.Content>
          <Form>
            <Label> Assigned To: </Label>
            <select name="pets" id="pet-select">
    
    			<option value="">--Please choose an option--</option>







    			<option value="dog">Dog</option>
    			<option value="cat">Cat</option>
    			<option value="hamster">Hamster</option>
    			<option value="parrot">Parrot</option>
    			<option value="spider">Spider</option>
    			<option value="goldfish">Goldfish</option>
			</select>
			<Divider hidden />
            <Label> Task: </Label>
            <Form.Input
              type="text"
              name="taskName"
              // value={this.state.description}
              // onChange={this.handleChange}
            />
            <Divider hidden />
            <Label> Duration: </Label>
            <select name="pets" id="pet-select">
    			<option value="">--Please choose an option--</option>
    			<option value="1">1 Day</option>
    			<option value="2">2 Days</option>
    			<option value="3">3 Days</option>
    			<option value="4">4 Days</option>
    			<option value="5">5 Days</option>
    			<option value="6">6 Days</option>
    			<option value="7">7 Days</option>
    			<option value="8">8 Days</option>
    			<option value="9">9 Days</option>
    			<option value="10">10 Days</option>
			</select>
			<Divider hidden />
            <Label> Reward: </Label>
            <Form.Input
              type="text"
              name="reward"
              // value={this.state.start_date}
              // onChange={this.handleChange}
            />
            <Divider hidden />
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}


export default AddTaskModal;