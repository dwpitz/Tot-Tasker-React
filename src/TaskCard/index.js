 import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container, Card, Icon, Progress  } from "semantic-ui-react";


 class TaskCard extends Component {

  constructor(props) {
  	console.log("props");
  	console.log(props);	
    super();
    this.state = {
      	currentPercent: 0,
    	increments: 0,
    	percentage: 0
    };
  }

  componentDidMount() {
    this.setState({
      	percent: 0,
    	increments: 100 / this.props.task.coundownToCompletion,
    	percentage: 0
    })
  }

  incrementor = () => {
  	let currentIncrement = this.state.currentPercent + this.state.increments
  	this.setState({
  		percentage: currentIncrement
  	})
  }

  decrease = () => {
  	let percent = this.percent - this.percent
  	this.setState({
  		percentage: percent
  	})
  }  


  render(){
  	return (
  		<div>
  			<h4>Task: {this.props.task.taskName}</h4>
  			<h5>Reward: {this.props.task.reward}</h5>
  			<h5>Days Remaining: {this.props.task.coundownToCompletion}</h5>
  			<Progress percent={this.state.percentage} indicating autoSuccess/>
  			<Icon onClick={this.incrementor} name='plus' size='large'/>
  			<Icon onClick={this.decrease} name='minus' size='large'/>
  		</div>
  	)

  	return (
  		<div>
  			{TaskCard}
  		</div>
  	)

  }

  

}

export default TaskCard