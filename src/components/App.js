import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PizzaList from './PizzaList';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        Hello
        <PizzaList
          pizzas={this.props.data.pizzaSizes || []}
          refetch={this.props.data.refetch}
          loading={this.props.data.loading}
        />
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
    }
  }
`;

const withQuery = graphql(allPizzasQuery)(App);

// const PizzaAppLinked = connect(
//   (state) => ({ filter: state.filter }),
//   (dispatch) => ({
//     setFilter(filter) {
//       dispatch({
//         type: 'SET_FILTER',
//         filter,
//       });
//     },
//   }),
// )(withQuery);

export default withQuery;
