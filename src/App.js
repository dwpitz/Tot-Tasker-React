import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm'
import { Form, Header } from "semantic-ui-react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
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
      // if (parsedRegisterResponse.status.code === 200) {
  //   this.setState({
  //     loggedIn: True
  //   })
  // } else {
  //   console.log(parsedRegisterResponse);
  // }   
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
        <Header>
          
          <RegistrationForm register={this.register}/>
        </Header>
      </div>
    )
    
  }
  

}



export default App;
