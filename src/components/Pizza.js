import React, { PropTypes, Component } from 'react';

class Pizza extends Component {
  componentDidMount() {
    console.log(this.props.pizza);
  }
  render() {
    return (
      <li>
        <div className="view">
          { this.props.pizza.name }
        </div>
      </li>
    );
  }
}

Pizza.propTypes = {
  pizza: PropTypes.object,
};

export default Pizza;
