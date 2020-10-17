import React from 'react';
import PropTypes from 'prop-types';
import './GameButton.css';

const GameButton = (props) => {
  const {
    type, status, value, id, onButtonClick,
  } = props;
  return (
    <button
      onClick={onButtonClick}
      className={`game-button game-button--${type} game-button--${status}`}
      type="button"
    >
      <div className="game-button__wrapper">
        <p>
          {id && <span className="game-button-id">{id}</span>}
          {value}
        </p>
      </div>
    </button>
  );
};

GameButton.propTypes = {
  type: PropTypes.string.isRequired,
  status: PropTypes.string,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  onButtonClick: PropTypes.func,
};

GameButton.defaultProps = {
  id: null,
  status: 'inactive',
  onButtonClick: () => {},
};

export default GameButton;
