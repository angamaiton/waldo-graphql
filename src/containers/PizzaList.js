import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receivePizzas } from '../actions';

const Pizza = ({ text }) => {
  return (
    <li>{ text }</li>
  );
};

class PizzaList extends Component {
  componentDidMount() {
    const { receivePizzas } = this.props;
    receivePizzas();
  }
  render() {
    const { pizzas, receivePizzas } = this.props;
    return (
      <div className="pizzaListContainer">
        <h1>Testing list</h1>
        <ul className="pizzaList">
          {
            pizzas.map((pizza) => {
              return (
                <Pizza key={pizza.id} />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzaList.pizzas,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onPizzaClick: (id) => {
//       dispatch(togglePizza(id))
//     },
//     receiveTodos: () => {
//       dispatch(receiveTodos())
//     }
//   }
// }

export default PizzaList;
