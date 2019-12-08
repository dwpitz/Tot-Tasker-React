import React, { Component} from "react";
import { Menu } from "semantic-ui-react";

class NavBar extends Component {
	constructor(props) {
		super();
		this.state = {

		}
	}

	render() {
		return (
			<Menu className="Menu">
				<Menu.Item
					name="Tot Tasker"
					// onClick={}
				>
					TOT TASKER
				</Menu.Item>
				<Menu.Item
					name="Account"
					// onClick={}
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