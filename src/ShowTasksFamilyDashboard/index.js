import React, { Component} from "react";
import { Header, Form, Label, Divider, Button, Container, Card, Icon, Progress, Grid  } from "semantic-ui-react";
import TaskCard from '../TaskCard'

class ShowTasks extends React.Component {
  constructor(props) {
    super();
    this.state = {

    };
  }  


  render() {
  	const totList = this.props.tots.map((tot) => {
  		return (
          <Card>
  					<Card.Content>
  						<Card.Header>{tot.name}</Card.Header>
  						{tot.tasks.map((task) => {
  							return (
  								<TaskCard task={task} totId={tot._id} updateTask={this.props.updateTask}/>
  							)
  						})}
  					</Card.Content>
  				</Card>
          )
	})
	return (<div>
				{totList}
			</div>
	)	

  }

}


export default ShowTasks