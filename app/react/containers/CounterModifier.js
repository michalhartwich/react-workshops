import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { counterActions } from 'actions';

import CounterModifier from 'components/CounterModifier';

const mapDispatchToProps = dispatch => ({
  increaseCount() {
    dispatch(counterActions.increase());
  },
  decreaseCount() {
    dispatch(counterActions.decrease());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(CounterModifier);
