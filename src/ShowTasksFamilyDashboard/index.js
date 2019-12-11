import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container, Card, Icon, Progress  } from "semantic-ui-react";

class ShowTasks extends React.Component {
  constructor(props) {
    super();
    this.state = {
    	percent: 50,
    	increments: 0
    };
  }

  // increments = () => {

  // }
  


  render() {
  	const totList = this.props.tots.map((tot) => {
  		return 	<Card>
  					<Card.Content>
  						<Card.Header>{tot.name}</Card.Header>
  						{tot.tasks.map((task) => {	
  							return (
  								<div>
  									<h4>Task: {task.taskName}</h4>
  									<h5>Reward: {task.reward}</h5>
  									<h5>Days Remaining: {task.	coundownToCompletion}</h5>
  									<Progress percent={this.state.percent}	indicating/>
  									<Icon name='plus' size='large'/>
  									<Icon name='minus' size='large'/>
  								</div>
  							)}
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




export default ShowTasks