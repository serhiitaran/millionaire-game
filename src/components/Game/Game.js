/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Game.css';

import { GameButton, Title, ButtonIcon } from '../shared';
import { getGameStepButtonStatus, getSidebarClasses, getGameOptionButtonStatus } from './helper';

const Game = (props) => {
  const {
    levels, currentLevel, currentQuestion, currency, onAnswerSelect, gameStatus, userAnswer,
  } = props;
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const onSidebarOpen = () => setSidebarVisible(true);
  const onSidebarClose = () => setSidebarVisible(false);

  const sidebarClasses = getSidebarClasses(sidebarVisible);

  const gameSteps = levels.map((level, index) => (
    <GameButton
      type="step"
      value={currency + level.money}
      key={level.id}
      status={getGameStepButtonStatus(index, currentLevel)}
    />
  ));
  const currentQuestionOptions = currentQuestion.options.map(({ id, answer }) => {
    const onGameButtonClick = () => onAnswerSelect(id);
    return (
      <GameButton
        onButtonClick={gameStatus === 'select' ? onGameButtonClick : null}
        status={getGameOptionButtonStatus(id, userAnswer, gameStatus, currentQuestion.answers[0])}
        type="option"
        id={id}
        value={answer}
        key={id}
      />
    );
  });

  return (
    <div className="game">
      <div className="game-main">
        <ButtonIcon type="menuOpen" onButtonClick={onSidebarOpen} />
        <Title size="medium" text={currentQuestion.question} />
        <div className="game-options">
          {currentQuestionOptions}
        </div>
      </div>
      <div className={sidebarClasses}>
        <ButtonIcon type="menuClose" onButtonClick={onSidebarClose} />
        <div className="game-steps">
          {gameSteps}
        </div>
      </div>

    </div>
  );
};

Game.propTypes = {
  levels: PropTypes.array.isRequired,
  currency: PropTypes.string.isRequired,
  currentLevel: PropTypes.number.isRequired,
  currentQuestion: PropTypes.object.isRequired,
  onAnswerSelect: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
  userAnswer: PropTypes.string.isRequired,
};

export default Game;
