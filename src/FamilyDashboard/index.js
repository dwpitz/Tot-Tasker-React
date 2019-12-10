import React, { Component} from "react";
import AddTots from '../AddTots';
import '../App.css';
import NavBar from '../Nav';
import AddTaskModal from '../AddTaskModal';
import { Header, Form, Label, Divider, Button, Container, Icon, Modal } from "semantic-ui-react";

class FamilyDashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      tasks: [],
      // addTaskModal: false,
      editModalOpen: false,

    };
  }

  componentDidMount() {
    this.props.getTots();
    this.props.loadFamilyDash()
  }

  // changeDisplay = () => {
  //     console.log("hitting the Family Dash Function")
  //     this.props.loadFamilyDash()
  // }

  openModal = () => {
      this.setState({
      editModalOpen: true
    })
  }
  

  closeModal = async () => {
      this.setState({
        editModalOpen: false
      })
      
    }  

  createTask = async (taskFromModal) => {
    console.log('This Is The Task You Created in the Modal, pre JSON');
    console.log(taskFromModal.tot);
    const createTotResponse = await fetch(
        process.env.REACT_APP_API_URL + "/tasks/" + taskFromModal.tot,
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(taskFromModal),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    console.log("This is the JSON response after making the fetch call")
    const parsedTasks = await createTotResponse.json();
    console.log(parsedTasks)

    // put task in array

  }



  render(){
  	return(
  		<div>
          <h1>Task Adder</h1>
        	<Icon onClick={this.openModal} name='plus' size='huge' />

          {this.props.tots.length > 0 ? <AddTaskModal editModalOpen={this.state.editModalOpen} closeModal={this.state.closeModal} tots={this.props.tots} createTask={this.createTask}/> : null}
          
  		</div>
  	)
  }

}
  export default FamilyDashboard;


