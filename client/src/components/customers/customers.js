import React,{Component} from 'react';
import './customers.css';


const User = ({match}) =>{
	return(
		<div>
			<h3>Welcome User {match.params.username}</h3>
		</div>
		)
}

class Customers extends React.Component{
	constructor(){
		super();
		this.state ={
			customers: []	
		};
	}

	componentDidMount(){
		fetch('/api/customers')
			.then(res => res.json())
			.then(customers => this.setState({customers},() => console.log("Customers Fetched..",customers)));
	}

	render(){
		return(
			<div>
				<h3>Customers Details</h3><br/>
				<ul>
					{this.state.customers.map(customer =>
						<li key={customer.id}>
							{customer.firstName} {customer.lastName}
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Customers;


