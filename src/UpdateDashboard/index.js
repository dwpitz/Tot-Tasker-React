import React, { Component} from "react";
import AddTots from '../AddTots';
import ShowTots from '../ShowTotsUpdateDashboard';
import '../App.css';
import NavBar from '../Nav';
import { Header, Form, Label, Divider, Button, Container, Grid } from "semantic-ui-react";

class UpdateDashboard extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    this.props.getTots();
  }


  

  render(){
  	return(
  		<div>
        <Grid>
          <Grid.Column width={7}>
          <h1> Add Tots </h1>
  			   <AddTots createTot={this.props.createTot}/> 
          </Grid.Column>
          <Divider hidden />
          <Divider hidden />
          <Grid.Column width={7}>
          <h1> Your Tots </h1>
          {this.props.tots.length > 0 ? <ShowTots tots={this.props.tots}/> : null}
          </Grid.Column>
        </Grid>
  		</div>
  	)
  }


}

export default UpdateDashboard;


