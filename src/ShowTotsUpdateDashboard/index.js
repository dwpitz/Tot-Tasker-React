import React, { Component} from "react";
import { Card, Header, Form, Label, Divider, Button, Container } from "semantic-ui-react";

const ShowTots = (props) => {
	console.log("hitting the showTots function");
	console.log(props);
	// return null;
	const totList = props.tots.map((tot) => {
		return (

				<Card key={tot.id}>
  				<Card.Content>
  					<Card.Header>{tot.name}</Card.Header>
  				</Card.Content>
  				</Card>
		)	
	})
	console.log(totList);
  return <Card.Group>{totList}</Card.Group>;
};

export default ShowTots
