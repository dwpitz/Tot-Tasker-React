import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container, Card, Icon, Progress  } from "semantic-ui-react";


 class TaskCard extends Component {

  componentDidMount() {
    this.render()
  }


  incrementor = (e) => {
    // call props updateTask(totId, taskID, this.props.countSoFar+1)
    this.props.updateTask(this.props.task.tot, this.props.task._id, this.props.task.countSoFar + 1)
  }

  decrease = (e) => {
  	this.props.updateTask(this.props.task.tot, this.props.task._id, this.props.task.countSoFar - 1)
  }  


  render(){
  	return (
  		<div>
  			<h3>Task: {this.props.task.taskName}</h3>
  			<h4>Reward: {this.props.task.reward}</h4>
        <Icon type="Submit" onClick={this.decrease} name='minus' size='big'/>
        <Icon type="Submit" onClick={this.incrementor} name='plus' size='big'/>
  			<Progress percent={this.props.task.countSoFar / this.props.task.coundownToCompletion * 100} indicating autoSuccess label/>
	
  		</div>
  	)

  }

  

}

export default TaskCard