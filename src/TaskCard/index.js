import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container, Card, Icon, Progress  } from "semantic-ui-react";


 class TaskCard extends Component {


  incrementor = (e) => {
    console.log('props in TaskCard');
    console.log(this.props);
    // call props updateTask(totId, taskID, this.props.countSoFar+1)
    this.props.updateTask(this.props.task.tot, this.props.task._id, this.props.task.countSoFar + 1)
  }

  decrease = (e) => {
    console.log('props in TaskCard');
    console.log(this.props);
  	this.props.updateTask(this.props.task.tot, this.props.task._id, this.props.task.countSoFar - 1)
  }  


  render(){
    // console.log("this.props in TaskCard");
    console.log(this.props); 
  	return (
  		<div>
  			<h4>Task: {this.props.task.taskName}</h4>
  			<h5>Reward: {this.props.task.reward}</h5>
  			<h5>Days Remaining: {this.props.task.coundownToCompletion}</h5>
  			<Progress percent={this.props.task.countSoFar / this.props.task.coundownToCompletion * 100} indicating autoSuccess/>
  			<Icon type="Submit" onClick={this.incrementor} name='plus' size='big'/>
  			<Icon type="Submit" onClick={this.decrease} name='minus' size='big'/>
        <Button type="Submit">Delete Task</Button>
  		</div>
  	)

  	// return (
  	// 	<div>
  	// 		{TaskCard}
  	// 	</div>
  	// )

  }

  

}

export default TaskCard