import React, { Component } from 'react';

class PizzaCart extends Component {
  render() {
    return (
      <div className="pizzaCart">
        <h2>Add your pizzas here!</h2>
        <div>
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    );
  }
}

export default PizzaCart;
