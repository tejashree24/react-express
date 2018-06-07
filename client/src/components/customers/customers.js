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
		this.getCustomers();
	}

	getCustomers = _ => {
		fetch('http://localhost:5000/customers')
		.then(response => response.json())
		.then(response => this.setState({customers:response.data}))
		.catch(err=> console.error(err))
	}

	renderCustomer = ({id,firstName}) => 
		<div key={id}>
			<h5>Id: {id} Name: {firstName}</h5>
		</div>
	
	render(){
		const {customers} = this.state;
		return(
			<div className="App">
			<h3> Customers Details </h3>
				{customers.map(this.renderCustomer)}
			</div>
		);
	}
}

export default Customers;


