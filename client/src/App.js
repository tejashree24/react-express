import React, { Component } from 'react';
import Customer from './components/customers/customers.js';
import User from './components/customers/users.js';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>React App + Express </h3>
        <br/>

        <Router>
        	<div className="App">
        		<ul>
        			<li>
        				<Link to="/customers/"> Customers </Link>
        			</li>
        			<li>
        				<Link to="/users/"> Users </Link>
        			</li>
        		</ul>
        		<Route path="/" exact strict render={
        			()=> {
        				return(
							<h2>Welcome Home</h2>
        				);
        			}
        		}/>
        		<Route path="/customers/" exact strict render={
        			()=> {
        				return(
							<Customer/>
        				);
        			}
        		}/>
        		<Route path="/users/" exact strict render={
        			()=> {
        				return(
							<User/>
        				);
        			}
        		}/>


        	</div>
        </Router>
        
      </div>
    );
  }
}

export default App;
        // <User/>
