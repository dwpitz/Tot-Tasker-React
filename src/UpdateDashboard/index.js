import React, { Component} from "react";
import AddTots from '../AddTots';
import ShowTots from '../ShowTotsUpdateDashboard';
import '../App.css';
import NavBar from '../Nav';
import { Header, Form, Label, Divider, Button, Container, Grid } from "semantic-ui-react";

class UpdateDashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      tots: []

    };
  }

  componentDidMount() {
    this.getTots();
  }

  createTot = async (totFromForm) => {
    console.log('This Is The Tot You Created, pre Json');
    console.log(totFromForm);
    const createTotResponse = await fetch(
        process.env.REACT_APP_API_URL + "/tots/" + this.props.familyID,
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(totFromForm),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    console.log("This is the JSON response after making the fetch call")
    const parsedTots = await createTotResponse.json();
    // console.log(parsedTots.createdTot)

    // put tot in array
    this.setState({
        tots: [...this.state.tots, parsedTots.createdTot]
      });
    console.log('Here is your state')
    console.log(this.state);

  }

  getTots = async () => {
    console.log('hitting Get Tots');
    try {
      const tots = await fetch(
        process.env.REACT_APP_API_URL + "/family/" + this.props.familyID,
        {
          method: "GET",
          credentials: "include",
          body: JSON.stringify(),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const parsedTots = await tots.json();
      console.log("Below is parsedTots from UpdateDashboard");
      console.log(parsedTots);

      this.setState({
        tots: parsedTots.data.tots
      });
    } catch (err) {}
    console.log("State from getTots");
    console.log(this.state)

  };

  render(){
  	return(
  		<div>
        <Grid>
          <Grid.Column width={6}>
  			   <AddTots createTot={this.createTot}/> 
          </Grid.Column>
          <Divider hidden />
          <Divider hidden />
          <Grid.Column width={4}>
          {this.state.tots.length > 0 ? <ShowTots tots={this.state.tots}/> : null}
          </Grid.Column>
        </Grid>
  		</div>
  	)
  }


}

export default UpdateDashboard;


