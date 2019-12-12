import React, { Component} from "react";
import AddTots from '../AddTots';
import '../App.css';
import NavBar from '../Nav';
import AddTaskModal from '../AddTaskModal';
import ShowTasks from '../ShowTasksFamilyDashboard'
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
    console.log("componentDidMount in FamilyDashboard");
    this.props.getTots();
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

 

//this is going up a level to fix the add task problem. and we need to reference the tasks in app.js
  // createTask = async (taskFromModal) => {

  //   const createTotResponse = await fetch(
  //       process.env.REACT_APP_API_URL + "/tasks/" + taskFromModal.tot,
  //       {
  //         method: "POST",
  //         credentials: "include",
  //         body: JSON.stringify(taskFromModal),
  //         headers: {
  //           "Content-Type": "application/json"
  //         }
  //       }
  //     );
  //   console.log("This is the JSON response after making the fetch call")
  //   const parsedTasks = await createTotResponse.json();
  //   console.log(parsedTasks.createTask)
  //   // put task in array
  //   this.setState({
  //     tasks: [...this.state.tasks, parsedTasks.createTask]
  //   });
    

  // };



  render(){

   	return(
  		<div>
          <h1>Task Adder</h1>
        	<Icon onClick={this.openModal} name='plus' size='huge' />

          {this.props.tots.length > 0 ? <AddTaskModal editModalOpen={this.state.editModalOpen} closeModal={this.closeModal} tots={this.props.tots} createTask={this.props.createTask}/> : null}

           {/*this.state.tasks.length > 0*/true  ? <ShowTasks tasks={this.state.tasks} tots={this.props.tots} updateTask={this.props.updateTask}/> : null}


         
  		</div>
  	)
  }

}
  export default FamilyDashboard;



