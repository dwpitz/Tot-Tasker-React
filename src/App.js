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
      tots: [], // all data lives here
      // showLogin: true
    };
  }
  

  updateTask = async (totId, taskId, newCountSoFar) => {
    console.log("hello..working");
    // matches field in Task you want to update {countSoFar: newCountSoFar}
    try {
      const updateTaskresponse = await fetch(process.env.REACT_APP_API_URL + "/tasks/" + taskId,
    {
      method: "PUT",
      credentials: "include",
      body: JSON.stringify({countSoFar: newCountSoFar}),
      headers: {
        "Content-Type": "application/json"
      }
    });
      //Map through the Tots array in state.  See if there is a totID that matches...
    const parsedTasks = await updateTaskresponse.json();
    const newTotArray = this.state.tots.map((tot) => {
      //If there is, see if there is a task ID that matches...
      if (parsedTasks.data.tot === tot._id){
        const newTaskArray = tot.tasks.map((task) => {
          if(parsedTasks.data._id === task._id) {
            task = parsedTasks.data
          }
          return task
        })
      }
      return tot
    })
    //If they match we are setting state with the new TotArray.  
    this.setState.tots = {newTotArray}
    console.log(this.state.tots);

    }
    catch (err) {
      console.log(err)
    }

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
      loggedIn: false,
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
  }

  loadFamilyDash = () => {
    console.log('hitting the Family Dashboard')
    this.setState({
      loadFamilyDash: true,
      loadAccountUpdate: false,
      loadRegistration: false,
      loadLogin: false,
      

    })
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
      console.log(parsedLoginResponse.data[0]);
      this.setState({
          loggedIn: true,
          familyID: id
      });
      this.loadFamilyDash();
    } else {
      
    }  

  }


  logout = async () => {
    const response = await fetch(
      // fetch the response from the API
      process.env.REACT_APP_API_URL + "/family/logout",
      {
        method: "GET",
        // this is the cookies
        credentials: "include",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const parsedLogoutResponse = await response.json();

    if (parsedLogoutResponse.status.code === 200) {
      this.setState({
        loggedIn: false
      });
    } else {
      console.log(parsedLogoutResponse);
    }
  };

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
    console.log(parsedTots);
    console.log(parsedTots.createdTot)

    // put tot in array
    this.setState({
        tots: [...this.state.tots, parsedTots.createdTot]
    });

  }
  


  render() {
    console.log('Here is your state.tots in App.js')
    console.log(this.state.tots);
    return(
      <div>
        <NavBar loadAccountUpdate={this.loadAccountUpdate} loadFamilyDash={this.loadFamilyDash} loadLoginForm={this.loadLoginForm} loggedIn={this.state.loggedIn}/>

        {this.state.loadFamilyDash ? <FamilyDashboard loadFamilyDash={this.loadFamilyDash} tots={this.state.tots} getTots={this.getTots} createTot={this.createTot} updateTask={this.updateTask} createTask={this.createTask}/> : null}

        {
          this.state.loadAccountUpdate 
          ? 
          <UpdateDashboard 
            familyID={this.state.familyID} 
            tots={this.state.tots} 
            getTots={this.getTots} 
            createTot={this.createTot}
          /> 
          : 
          null 
        }

        {this.loggedIn ? this.state.loadLoginForm=false : null}

        {this.state.loadRegistration ? <RegistrationForm loadRegistrationScreen={this.loadRegistrationScreen} loadLoginForm={this.loadLoginForm} register={this.register}/> : null}

        {this.state.loadLogin ? <LoginForm login={this.login} loadLoginForm={this.loadLoginForm} loadRegistrationScreen={this.loadRegistrationScreen}/>: null}           
      </div>
    )   
  }
}



export default App;
