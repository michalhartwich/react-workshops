import React, { PropTypes } from 'react';

const Button = ({ children, onClick }) => (
  <button
    className="btn btn-primary"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Button;
