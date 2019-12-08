import React, { Component} from "react";
import AddTots from '../AddTots';
import '../App.css';
import NavBar from '../Nav';
import { Header, Form, Label, Divider, Button, Container } from "semantic-ui-react";

class UpdateDashboard extends Component {
  constructor() {
    super();
    this.state = {
      // showLogin: true
    };
  }

  render(){
  	return(
  		<div>
  			<AddTots/>
  		</div>
  	)
  }


}

export default UpdateDashboard;


