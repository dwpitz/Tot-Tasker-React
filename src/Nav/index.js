import React, { Component} from "react";
import { Menu } from "semantic-ui-react";

class NavBar extends Component {
	constructor(props) {
		super();
		this.state = {

		}
	}

	handleHomeClick = () => {
		if(this.props.loggedIn){
			this.props.loadFamilyDash()
		} else {
			return null
		}
	}

	handleAccountClick = () => {
		if(this.props.loggedIn){
			this.props.loadAccountUpdate()
		} else {
			return null
		}
		
	}

	handleLogout = () => {
		if(this.props.loggedIn){
			this.props.loadLoginForm()
		} else {
			return null
		}
	}
	
	

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		return (
			<Menu className="navBar">
				<Menu.Item
					name="TOT TASKER"
				>
					TOT TASKER
				</Menu.Item>
				<Menu.Item
					name="Tot Tasker"
					onClick={this.handleHomeClick}
				>
					ADD TASKS
				</Menu.Item>
				<Menu.Item
					name="Account"
					onClick={this.handleAccountClick}
				>
					ADD TOTS
				</Menu.Item>
				<Menu.Item
					name="Account"
					onClick={this.handleLogout}
				>
					LOGOUT
				</Menu.Item>
			</Menu>

		)
	}
		
}

export default NavBar;