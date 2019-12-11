import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container, Card, Icon, Progress  } from "semantic-ui-react";

const ShowTasks = (props) => {
	console.log(props.tots);



  const totList = props.tots.map((tot) => {
  		return (

				<Card>
  				<Card.Content>
  					<Card.Header>{tot.name}</Card.Header>
  					{tot.tasks.map((task) => {	
  						return (
  							<div>
  								<h4>Task: {task.taskName}</h4>
  								<h5>Reward: {task.reward}</h5>
  							<Progress percent={50}indicating/>
  							<Icon name='plus' size='large'/>
  							<Icon name='minus' size='large'/>
  							</div>
  						)}
  					)}
  				</Card.Content>
  				</Card>
		)			
	})

  return <Card.Group>{totList}</Card.Group>;


};








export default ShowTasks