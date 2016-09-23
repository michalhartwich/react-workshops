import React, { PropTypes } from 'react';

const Counter = ({ count }) => (
  <div className="counter">
    <h1 className="counter__value">
      Current count is: {count}
    </h1>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
