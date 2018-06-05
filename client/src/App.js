import React, { Component } from 'react';
import Customer from './components/customers/customers.js';
import User from './components/customers/users.js';
class App extends Component {
  render() {
    return (
      <div>
        React App
        <Customer/>
        <User/>
      </div>
    );
  }
}

export default App;
