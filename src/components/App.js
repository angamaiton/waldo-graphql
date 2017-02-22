import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PizzaList from './PizzaList';

class App extends Component {
  componentDidMount() {
    console.log(this.props.data);
  }
  render() {
    return (
      <div className="appContainer">
        Hello
        <PizzaList pizzas={this.props.data.allPizzas || []} />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.object,
};

const allPizzasQuery = gql`
  query allPizzas {
    pizzaSizes {
      name
      maxToppings
    }
  }
`;

const withQuery = graphql(allPizzasQuery)(App);

const PizzaAppLinked = connect(
  (state) => ({ filter: state.filter }),
  (dispatch) => ({
    setFilter(filter) {
      dispatch({
        type: 'SET_FILTER',
        filter,
      });
    },
  }),
)(withQuery);

export default PizzaAppLinked;
