import React, { PropTypes, Component } from 'react';

class Pizza extends Component {
  componentDidMount() {
    console.log(this.props.pizza);
  }
  render() {
    return (
      <li id={this.props.pizza.name}>
        <div>Pizza Size: { this.props.pizza.name }</div>     
        <div>Max Toppings: { this.props.pizza.maxToppings }</div>
        <div>Base Price: { this.props.pizza.basePrice }</div>
      </li>
    );
  }
}

Pizza.propTypes = {
  pizza: PropTypes.object,
};

export default Pizza;
