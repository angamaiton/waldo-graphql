import React, { Component } from 'react';
// import { connect } from 'react-redux';

import PizzaCart from './PizzaCart';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <PizzaCart />
        </div>
      </div>
    );
  }
}

export default App;

