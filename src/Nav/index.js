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
					TOT TASKER
				</Menu.Item>
				<Menu.Item
					name="Account"
					onClick={this.handleAccountClick}
				>
					ACCOUNT
				</Menu.Item>
				<Menu.Item
					name="Logout"
					// onClick={}
				>
					LOGOUT
				</Menu.Item>
			</Menu>

		)
	}
		
}

export default NavBar;