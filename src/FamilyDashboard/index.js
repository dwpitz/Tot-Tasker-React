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

  closeModal = async () => {
      this.setState({
        editModalOpen: false
      })
      
    }

  createTask = async (taskFromModal) => {
    this.setState({
      editModalOpen: true
    })
    console.log(this.state);

    
    
    
    // console.log('This Is The Task You Created, pre Json');
    // console.log(taskFromModal);
    // const createTotResponse = await fetch(
    //     process.env.REACT_APP_API_URL + "/tasks/" + this.props.totID,
    //     {
    //       method: "POST",
    //       credentials: "include",
    //       body: JSON.stringify(taskFromModal),
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     }
    //   );
    // console.log("This is the JSON response after making the fetch call")
    // const parsedTots = await createTotResponse.json();
    // // console.log(parsedTots.createdTot)

    // // put task in array

  }



  render(){
  	return(
  		<div>
          <h1>Task Adder</h1>
        	<Icon onClick={this.createTask} name='plus' size='huge' />
          <AddTaskModal editModalOpen={this.state.editModalOpen} closeModal={this.state.closeModal}/>
  		</div>
  	)
  }

}
  export default FamilyDashboard;


