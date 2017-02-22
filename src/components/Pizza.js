import React, { PropTypes, Component } from 'react';

class Pizza extends Component {
  render() {
    return (
      <li>
        <div className="view">
          { this.props.pizza }
        </div>
      </li>
    );
  }
}

Pizza.propTypes = {
  pizza: PropTypes.object,
};

export default Pizza;
