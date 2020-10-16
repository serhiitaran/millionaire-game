import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';

const Title = (props) => {
  const { text } = props;
  return <h1 className="main-title">{text}</h1>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
