import React, { Component} from "react";
import AddTots from '../AddTots';
import '../App.css';
import NavBar from '../Nav';
import { Header, Form, Label, Divider, Button, Container } from "semantic-ui-react";

class UpdateDashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      tots: []

    };
  }

  createTot = async (totFromForm) => {
    console.log('hitting createTot Route');
    console.log(totFromForm);
    console.log(this.props.familyID);
    const createTotResponse = await fetch(
        process.env.REACT_APP_API_URL + "/tots/" + this.props.familyID,
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log("The created response");
      console.log(createTotResponse);
  }
  


  render(){
  	return(
  		<div>
  			<AddTots createTot = {this.createTot}/>
  		</div>
  	)
  }


}

export default UpdateDashboard;


