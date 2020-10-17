import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';

const Title = (props) => {
  const { text, size } = props;
  return <h1 className={`main-title main-title--${size}`}>{text}</h1>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Title;
