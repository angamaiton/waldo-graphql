import React, { PropTypes, Component } from 'react';

export default class Pizza extends Component {
  componentDidMount() {
    console.log(this.props.pizza.name);
  }
  render() {
    return (
      <li>
        { this.props.pizza }
      </li>
    );
  }
}

Pizza.propTypes = {
  pizza: PropTypes.object,
};

