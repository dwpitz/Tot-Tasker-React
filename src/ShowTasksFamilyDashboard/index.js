import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container, Card } from "semantic-ui-react";

const ShowTasks = (props) => {
	console.log(props.tots);
  const totList = props.tots.map((tot) => {
  		return (

				<Card>
  				<Card.Content>
  					<Card.Header>{tot.name}</Card.Header>
  					{tot.tasks.map((task) => {
  						
  						return <h4>{task.taskName} {task.reward}<br/></h4>
  					}

  						)}
  				</Card.Content>
  				</Card>
		)
		const taskList = props.tasks.map((totList) => {
			return (

				<Card>
  				<Card.Content>
  					<Card.Header>{totList.tasks}</Card.Header>
  				</Card.Content>
  				</Card>
		) 		
  	})
		return <Card.Group>{taskList}</Card.Group>;
			
	})

  return <Card.Group>{totList}</Card.Group>;


};




export default ShowTasks