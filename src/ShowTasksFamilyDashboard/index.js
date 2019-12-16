import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container, Card, Icon, Progress, Grid  } from "semantic-ui-react";
import TaskCard from '../TaskCard'
import '../App.css';

class ShowTasks extends React.Component {
  constructor(props) {
    super();
    this.state = {

    };
  }  


  render() {
  	const totList = this.props.tots.map((tot) => {
  		return (
        <Grid
          className="taskCard"
          columns={1}
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="center"
        >
          <Grid.Row>
          <Card>
  					<Card.Content>
  						<Card.Header><h1>{tot.name}</h1></Card.Header>
  						{tot.tasks.map((task) => {
  							return (
  								<TaskCard task={task} totId={tot._id} updateTask={this.props.updateTask}/>
  							)
  						})}
  					</Card.Content>
  				</Card>
          </Grid.Row>
        </Grid>
          )
	})
	return (<div>
				{totList}
			</div>
	)	

  }

}


export default ShowTasks