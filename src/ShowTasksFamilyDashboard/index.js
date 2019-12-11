import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container, Card, Icon, Progress  } from "semantic-ui-react";

class ShowTasks extends React.Component {
  constructor(props) {
    super();
    this.state = {
    	percent: 50,
    	increments: 2,
    	percentage: 0
    };
  }

  incrementor = () => {
  	let percent = 100 / this.state.increments
  	this.setState({
  		percentage: percent
  	})
  }

  


  render() {
  	const totList = this.props.tots.map((tot) => {
  		return 	<Card>
  					<Card.Content>
  						<Card.Header>{tot.name}</Card.Header>
  						{tot.tasks.map((task) => {
  							<TaskCard task={tot.task} />
  						}
  						)}
  					</Card.Content>
  				</Card>	
	})

	return (<div>
				{totList}
			</div>
	)	
  }
}



  							// return (
  							// 	<div>
  							// 		<h4>Task: {task.taskName}</h4>
  							// 		<h5>Reward: {task.reward}</h5>
  							// 		<h5>Days Remaining: {task.	coundownToCompletion}</h5>

  							// 		<Progress percent={this.state.percentage}	indicating autoSuccess/>
  							// 		<Icon onClick={this.incrementor} name='plus' size='large'/>
  							// 		<Icon name='minus' size='large'/>
  							// 	</div>
  							// )

export default ShowTasks