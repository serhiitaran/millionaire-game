import React from 'react';
import PropTypes from 'prop-types';
import getButtonIcon from './helper';

import './ButtonIcon.css';

const ButtonIcon = (props) => {
  const { type, onButtonClick } = props;
  const { src, alt } = getButtonIcon(type);

  return (
    <button onClick={onButtonClick} type="button" className="button-icon">
      <img src={src} alt={alt} />
    </button>
  );
};

ButtonIcon.propTypes = {
  type: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default ButtonIcon;
