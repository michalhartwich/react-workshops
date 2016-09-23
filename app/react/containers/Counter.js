import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Counter from 'components/Counter';

const mapStateToProps = state => ({
  count: state.counter,
});

export default connect(
  mapStateToProps
)(Counter);
