import React, { PropTypes, Component } from 'react';

class Pizza extends Component {
  renderToppings() {
    if (this.props.pizza.maxToppings !== null) {
      return this.props.pizza.maxToppings;
    }
    return 'N/A';
  }
  render() {
    return (
      <div>
        { this.props.pizza.name }
        <ul>
          <li>Base Price: ${this.props.pizza.basePrice}</li>
          <li>Max Toppings: {this.renderToppings()}</li>
        </ul>
      </div>
    );
  }
}

Pizza.propTypes = {
  pizza: PropTypes.object,
};

export default Pizza;
