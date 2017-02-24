import React, { PropTypes, Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PizzaList from './PizzaList';

class PizzaCart extends Component {
  render() {
    return (
      <div className="col">
        <PizzaList
          pizzas={this.props.data.pizzaSizes || []}
          refetch={this.props.data.refetch}
          loading={this.props.data.loading}
        />
        <button className="btn btn-primary">Add</button>
      </div>
    );
  }
}

PizzaCart.propTypes = {
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

const withQuery = graphql(allPizzasQuery)(PizzaCart);

export default withQuery;
