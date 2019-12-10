import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Nav';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import UpdateDashboard from './UpdateDashboard';
import FamilyDashboard from './FamilyDashboard'
import AddTots from './AddTots';
import { Form, Header } from "semantic-ui-react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      loadLogin: true,
      loadRegistration: false,
      loadAccountUpdate: false,
      loadFamilyDash: false,
      familyID: "",
      totID: "",
      tots: [],
      // showLogin: true
    };
  }

  register = async (registerInfo) => {
    const response = await fetch(process.env.REACT_APP_API_URL + '/family/register', 
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(registerInfo),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const parsedRegisterResponse = await response.json(); 
      if (parsedRegisterResponse.status.code === 200) {
    this.setState({
      loggedIn: true
    })
  } else {
    console.log(parsedRegisterResponse);
  }   
  }

  //These functions switch the state of the UI.  
  loadRegistrationScreen = () => {
    this.setState({
      loadRegistration: true,
      loadLogin: false,
      loadAccountUpdate: false,
      loadFamilyDash: false
    })
  }

  loadLoginForm = () => {
    console.log('hitting this...');
    this.setState({
      loadLogin: true,
      loadRegistration: false,
      loadAccountUpdate: false,
      loadFamilyDash: false

    })
  }

  loadAccountUpdate = () => {
    console.log('hitting the loadAccountUpdate')
    this.setState({
      loadAccountUpdate: true,
      loadRegistration: false,
      loadLogin: false,
      loadFamilyDash: false

    })
    console.log(this.state);
  }

  loadFamilyDash = () => {
    console.log('hitting the Family Dashboard')
    this.setState({
      loadFamilyDash: true,
      loadAccountUpdate: false,
      loadRegistration: false,
      loadLogin: false,
      

    })
    console.log(this.state);
  }
  

  login = async (login) => {  
    const response = await fetch(process.env.REACT_APP_API_URL + '/family/login',
    {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json"
      }
    }
    );
    const parsedLoginResponse = await response.json();

    if(parsedLoginResponse.status === 200) {
      const id = parsedLoginResponse.data[0]._id
      this.setState({
          loggedIn: true,
          loadFamilyDash: true,
          familyID: id
      });
      console.log(parsedLoginResponse.data[0]);
    } else {
      
    }  

  }

  getTots = async () => {
    console.log('hitting Get Tots');
    try {
      const tots = await fetch(
        process.env.REACT_APP_API_URL + "/family/" + this.state.familyID,
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

  createTot = async (totFromForm) => {
    console.log('This Is The Tot You Created, pre Json');
    console.log(totFromForm);
    const createTotResponse = await fetch(
        process.env.REACT_APP_API_URL + "/tots/" + this.state.familyID,
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
  


  render() {
    return(
      <div>
        <NavBar loadAccountUpdate={this.loadAccountUpdate}/>

        {this.state.loadFamilyDash ? <FamilyDashboard loadFamilyDash={this.loadFamilyDash} tots={this.state.tots} tots={this.state.tots} getTots={this.getTots} createTot={this.createTot}/> : null}

        {this.state.loadAccountUpdate ? <UpdateDashboard familyID={this.state.familyID} tots={this.state.tots} getTots={this.getTots} createTot={this.createTot}/> : null }

        {this.loggedIn ? this.state.loadLoginForm=false: null}

        {this.state.loadRegistration ? <RegistrationForm loadRegistrationScreen={this.loadRegistrationScreen} loadLoginForm={this.loadLoginForm}/> : null}

        {this.state.loadLogin ? <LoginForm login={this.login} loadLoginForm={this.loadLoginForm} loadRegistrationScreen={this.loadRegistrationScreen}/>: null}           
      </div>
    )
    
  }
  

}



export default App;
