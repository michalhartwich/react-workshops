import React, { PropTypes } from 'react';
import Button from 'components/Button';

const CounterModifier = ({ increaseCount, decreaseCount }) => (
  <div className="counter-modifier">
    <h3 className="counter-modifier__title">
      Modify the redux state below
    </h3>
    <Button onClick={increaseCount}> + </Button>
    <Button onClick={decreaseCount}> - </Button>
  </div>
);

CounterModifier.propTypes = {
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
};

export default CounterModifier;
