import React, { Component} from "react";
import addTots from './AddTots';

class updateContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      // showLogin: true
    };
  }


  render(){
  	return(
  		<addTots/>
  		)
  }


}

export default updateContainer;


