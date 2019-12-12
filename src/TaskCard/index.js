import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container, Card, Icon, Progress  } from "semantic-ui-react";


 class TaskCard extends Component {


  incrementor = (e) => {
  	// update your task
    // call props updateTask(totId, taskID, this.props.countSoFar+1)
  }


  // decrease = (e) => {
  // 	let percent = this.percent--
  // 	this.setState({
  // 		countSoFar: percent
  // 	})
  //   // this.handleSubmit()
  // }  


  render(){
    // console.log("this.props in TaskCard");
    console.log(this.props); 
  	return (
  		<div>
  			<h4>Task: {this.props.task.taskName}</h4>
  			<h5>Reward: {this.props.task.reward}</h5>
  			<h5>Days Remaining: {this.props.task.coundownToCompletion}</h5>
  			<Progress percent={ /*a / b * 100*/ 50} indicating autoSuccess/>
  			<Icon type="Submit" onClick={this.incrementor} name='plus' size='large'/>
  			<Icon type="Submit" onClick={this.decrease} name='minus' size='large'/>
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