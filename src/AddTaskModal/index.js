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
    console.log(this.props.tots);
    let totsList = null
    console.log("tots list before the map");
    console.log(totsList);
    
    totsList = this.props.tots.map((tots) => {
      return <option type="text" name={tots._id}>{tots.name}</option>
    })
    console.log("tots list AFTER the map");
    console.log(totsList);

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
              <select
                  type="text"
                  name="tot"
                  // value={this.state.start_date}
                  // onChange={this.handleChange
                >
                <option>--Please choose an option--</option>
                {totsList}
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
            <select
              type="text"
              name="reward"
              // value={this.state.start_date}
              // onChange={this.handleChange
            >
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