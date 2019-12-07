import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginRegisterForm from './LoginRegisterForm';
import { Form, Header } from "semantic-ui-react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
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
  }
  // if (parsedRegisterResponse.status.code === 200) {
  //   this.setState({
  //     loggedIn: True
  //   })
  // } else {
  //   console.log(parsedRegisterResponse);
  // }

  render() {
    return(
      <div>
        <Header>
          <LoginRegisterForm/>
        </Header>
      </div>
    )
    
  }
  

}



export default App;
