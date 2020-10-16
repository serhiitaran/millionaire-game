import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => {
  const { text } = props;
  return <button className="main-button" type="button">{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
