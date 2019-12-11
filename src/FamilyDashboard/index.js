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
    console.log(parsedTasks.createTask)
    // put task in array
    this.setState({
        tasks: [...this.state.tasks, parsedTasks.createTask]
      });
    

  }



  render(){
    console.log("family dashboard render");
    console.log(this.props);
    console.log(this.props.tots);
    console.log(this.props.tots.length);

    // let showTasks = this.props.tots.map(tot => {
    //   <ShowTasks tot=tot/>
    // })


   	return(
  		<div>
          <h1>Task Adder</h1>
        	<Icon onClick={this.openModal} name='plus' size='huge' />

          {this.props.tots.length > 0 ? <AddTaskModal editModalOpen={this.state.editModalOpen} closeModal={this.closeModal} tots={this.props.tots} createTask={this.createTask}/> : null}

           {/*this.state.tasks.length > 0*/true  ? <ShowTasks tasks={this.state.tasks} tots={this.props.tots} /> : null}


         
  		</div>
  	)
  }

}
  export default FamilyDashboard;

           // { showTasks }

