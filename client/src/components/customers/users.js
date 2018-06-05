import React,{Component} from 'react';

class Users extends React.Component{
	constructor(){
		super();
		this.state ={
			users: []	
		};
	}

	componentDidMount(){
		fetch('/api/users')
			.then(res => res.json())
			.then(users => this.setState({users},() => console.log("Customers Fetched..",users)));
	}
	render(){
		return(
			<div>
				Users Data
				<ul>
					{this.state.users.map(user =>
						<li key={user.id}>
							{user.username}
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Users;


