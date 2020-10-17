const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_GAME_PAGE':
      return ({
        ...state,
        currentPage: 'game',
        earned: 0,
        currentLevel: 0,
        gameStatus: 'select',
        userAnswer: 'answer',

      });
    case 'SET_SELECT_ANSWER':
      return { ...state, userAnswer: action.userAnswerId, gameStatus: 'check' };
    case 'SET_CHECK_ANSWER':
      return { ...state, gameStatus: 'result' };
    case 'SET_GAME_OVER':
      return ({
        ...state,
        currentPage: 'gameOver',
      });
    case 'SET_GAME_WIN':
      return ({
        ...state,
        earned: state.currency + state.levels[state.currentLevel].money,
        currentPage: 'gameOver',
      });
    case 'SET_NEXT_QUESTION':
      return ({
        ...state,
        earned: state.currency + state.levels[state.currentLevel].money,
        currentLevel: state.currentLevel + 1,
        gameStatus: 'select',
        userAnswer: null,
      });
    default:
      return state;
  }
};

export default reducer;
