import React, { useReducer } from 'react';
import { Game, GamePreview } from '../../components';
import { GAME_CHECK_ANSWER_DELAY, GAME_RESULT_DELAY } from '../../constants';
import reducer from './reducer';
import { createInitialState } from './helper';

import config from '../../config/index.json';

import '../../constants/constants.css';
import './App.css';

const App = () => {
  const initialState = createInitialState(config);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    currentPage, levels, questions, currency, currentLevel, userAnswer, earned, gameStatus,
  } = state;

  const setGamePage = () => dispatch({ type: 'SET_GAME_PAGE' });

  const onAnswerResult = (userAnswerId) => {
    setTimeout(() => {
      const isLastQuestion = currentLevel + 1 >= levels.length;
      const isCorrectAnswer = userAnswerId === questions[currentLevel].answers[0];
      if (isCorrectAnswer && isLastQuestion) {
        dispatch({ type: 'SET_GAME_WIN' });
      } else if (!isCorrectAnswer) {
        dispatch({ type: 'SET_GAME_OVER' });
      } else {
        dispatch({ type: 'SET_NEXT_QUESTION' });
      }
    }, GAME_RESULT_DELAY);
  };

  const onAnswerCheck = (userAnswerId) => {
    setTimeout(() => {
      dispatch({ type: 'SET_CHECK_ANSWER' });
      onAnswerResult(userAnswerId);
    }, GAME_CHECK_ANSWER_DELAY);
  };

  const onAnswerSelect = (userAnswerId) => {
    dispatch({ type: 'SET_SELECT_ANSWER', userAnswerId });
    onAnswerCheck(userAnswerId);
  };

  return (

    <div className="app">
      {currentPage === 'game'
        ? (
          <Game
            levels={levels || []}
            currentLevel={currentLevel}
            currentQuestion={questions[currentLevel] || {}}
            currency={currency}
            userAnswer={userAnswer}
            gameStatus={gameStatus}
            onAnswerSelect={onAnswerSelect}
          />
        )
        : <GamePreview type={currentPage} onGameStart={setGamePage} earned={earned} />}
    </div>

  );
};

export default App;
