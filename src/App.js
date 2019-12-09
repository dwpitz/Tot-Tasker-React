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
      familyID: "",
      totID: "",
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

  //This function switches the state of loadRegistration, which loads the registration form.
  registerForm = () => {
    this.setState({
      loadRegistration: true,
      loadLogin: false,
      loadAccountUpdate: false
    })
  }

  loginForm = () => {
    this.setState({
      loadLogin: true,
      loadRegistration: false,
      loadAccountUpdate: false

    })
  }

  loadAccountUpdate = () => {
    console.log('hitting the loadAccountUpdate')
    this.setState({
      loadAccountUpdate: true,
      loadRegistration: false,
      loadLogin: false
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
          familyID: id
      });
      console.log(parsedLoginResponse.data[0]);
    } else {
      
    }  

  }
  


  render() {
    return(
      <div>
        <NavBar loadAccountUpdate={this.loadAccountUpdate}/>
        {this.state.loggedIn ? <FamilyDashboard /> : null}
        {this.state.loadAccountUpdate ? <UpdateDashboard familyID={this.state.familyID}/> : null }
        {this.loggedIn ? this.state.loadLogin=false: null}
        {this.state.loadRegistration ? <RegistrationForm register={this.register} loginForm={this.loginForm}/> : null}
        {this.state.loadLogin ? <LoginForm login={this.login} registerForm={this.registerForm}/>: null}           
      </div>
    )
    
  }
  

}



export default App;
