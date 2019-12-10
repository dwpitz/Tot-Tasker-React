import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container, Card } from "semantic-ui-react";

const ShowTasks = (props) => {

	console.log("hitting the showTasks function");
	console.log(props);
	let taskList = null
	taskList = props.tasks.map((task) => {
		return (

				<Card key={task.id}>
  				<Card.Content>
  					<Card.Header>{task.name}</Card.Header>
  				</Card.Content>
  				</Card>
		)	
	})
	console.log(taskList);
  return <Card.Group>{taskList}</Card.Group>;
};

export default ShowTasks