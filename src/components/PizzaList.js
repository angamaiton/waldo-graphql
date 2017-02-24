import React, { PropTypes, Component } from 'react';
import Pizza from './Pizza';

class PizzaList extends Component {
  renderPizzas() {
    return this.props.pizzas.map(pizza => (<Pizza pizza={pizza} />));
  }
  render() {
    return (
      <div>
        <h4>Pizza List</h4>
        <ul className="pizzaList">
          {this.renderPizzas()}
        </ul>
      </div>
    );
  }
}

PizzaList.propTypes = {
  pizzas: PropTypes.array,
};

export default PizzaList;
