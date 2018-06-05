import React,{Component} from 'react';
import './customers.css';
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
				Customers Data
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


