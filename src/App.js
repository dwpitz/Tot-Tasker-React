import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Nav';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import UpdateDashboard from './UpdateDashboard';
import AddTots from './AddTots';
import { Form, Header } from "semantic-ui-react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      loadRegistration: false,
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
      loadRegistration: true
    })
  }

  loginForm = () => {
    this.setState({
      loadRegistration: false
    })
  }
  

  login = async (login) => {
    console.log(this.state)
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
      this.setState({
          loggedIn: true
        });
      console.log(parsedLoginResponse);
    } else {
      console.log(this.state);
    }  
  }
  


  render() {
    return(
      <div>
        <NavBar/>
        <UpdateDashboard/>
         {this.state.loadRegistration ? <RegistrationForm register={this.register} loginForm={this.loginForm}/> : <LoginForm login={this.login} registerForm={this.registerForm}/>}          
      </div>
    )
    
  }
  

}



export default App;
