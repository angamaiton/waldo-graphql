import React, { PropTypes, Component } from 'react';
// import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PizzaList from './PizzaList';
import PizzaCart from './PizzaCart';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <PizzaList
          pizzas={this.props.data.pizzaSizes || []}
          refetch={this.props.data.refetch}
          loading={this.props.data.loading}
        />
        <PizzaCart />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.object.isRequired,
};

const allPizzasQuery = gql`
  query pizzaSizes {
    pizzaSizes {
      name
      maxToppings
      basePrice
    }
  }
`;

const withQuery = graphql(allPizzasQuery)(App);

export default withQuery;

