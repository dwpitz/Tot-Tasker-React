import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container, Card } from "semantic-ui-react";

const ShowTasks = (props) => {

	console.log("hitting the showTasks function");
	console.log(props);
	const taskList = props.tasks.map((task) => {
		return (

				<Card key={task.id}>
  				<Card.Content>
  					<Card.Header>{task.taskName}</Card.Header>
  					<Card.Header>Days Until Reward Unlocked!</Card.Header>
  					<Card.Header>{task.coundownToCompletion}</Card.Header>
  					<Card.Header>Reward: {task.reward}</Card.Header>
  				</Card.Content>
  				</Card>
		)	
	})
	console.log(taskList);

  return <Card.Group>{taskList}</Card.Group>;
};

export default ShowTasks