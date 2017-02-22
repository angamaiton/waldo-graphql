import React, { PropTypes, Component } from 'react';
import Pizza from './Pizza';

class PizzaList extends Component {
  renderPizzas() {
    return this.props.pizzas.map((pizza) => {
      <Pizza key={pizza.id} pizza={pizza} />
    });
  }
  render() {
    return (
      <section>
        <ul className="pizzaList">
          {this.renderPizzas()}
        </ul>
      </section>
    );
  }
}

PizzaList.propTypes = {
  pizzas: PropTypes.array,
};

export default PizzaList;
