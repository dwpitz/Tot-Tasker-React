import React, { Component} from "react";
import { Menu } from "semantic-ui-react";

class NavBar extends Component {
	constructor(props) {
		super();
		this.state = {

		}
	}

	handleHomeClick = () => {
		this.props.loadFamilyDash()
	}
	

	handleAccountClick = () => {
		this.props.loadAccountUpdate()
	}
	

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		return (
			<Menu className="navBar">
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
					name="Logout"
					onClick={this.props.loadLoginForm}
				>
					LOGOUT
				</Menu.Item>
			</Menu>

		)
	}
		
}

export default NavBar;