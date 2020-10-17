import React from 'react';
import PropTypes from 'prop-types';
import './GameButton.css';

const GameButton = (props) => {
  const {
    type, status, value, id,
  } = props;
  return (
    <div className={`game-button game-button--${type} game-button--${status}`}>
      <div className="game-button__wrapper">
        <p>
          {id && <span className="game-button-id">{id}</span>}
          {value}
        </p>
      </div>
    </div>
  );
};

GameButton.propTypes = {
  type: PropTypes.string.isRequired,
  status: PropTypes.string,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
};

GameButton.defaultProps = {
  id: null,
  status: 'inactive',
};

export default GameButton;
