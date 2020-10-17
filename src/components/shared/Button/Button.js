import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => {
  const { text, onButtonClick } = props;
  return <button onClick={onButtonClick} className="main-button" type="button">{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
