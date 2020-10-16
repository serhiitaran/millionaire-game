import React from 'react';
import PropTypes from 'prop-types';

import './Subtitle.css';

const Subtitle = (props) => {
  const { text } = props;
  return <h2 className="main-subtitle">{text}</h2>;
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subtitle;
