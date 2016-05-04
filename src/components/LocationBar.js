import React, { Component, PropTypes } from 'react';

export default class LocationBar extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { city } = this.props;

    return (
      <div className="card counter-container">
        <div className="counter-num-label">{city}</div>
        <br />
      </div>
    );
  }
}

// LocationBar.propTypes = {
//   location: PropTypes.number.isRequired,
// };
