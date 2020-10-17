/* eslint-disable import/prefer-default-export */
export const createInitialState = (config) => {
  const { levels, questions, currency } = config;
  const initialState = {
    currentPage: 'gameStart',
    gameStatus: 'select',
    levels,
    questions,
    currency,
    currentLevel: 0,
    userAnswer: 'answer',
    earned: '0',
  };

  return initialState;
};
