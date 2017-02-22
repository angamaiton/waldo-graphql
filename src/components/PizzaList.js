import React, { PropTypes, Component } from 'react';
import Pizza from './Pizza';

class PizzaList extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  renderPizzas() {
    if (this.props.loading) {
      return (<div>Loading</div>);
    } else {
      return this.props.pizzas.map((pizza) => {
        <Pizza key={pizza.id} pizza={pizza} />
      });
    }
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
  loading: PropTypes.bool.isRequired,
};

export default PizzaList;
