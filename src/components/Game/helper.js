const getSidebarClasses = (sidebarVisible) => (sidebarVisible ? 'game-sidebar' : 'game-sidebar game-sidebar--hidden');

const getGameStepButtonStatus = (levelIndex, currentLevelIndex) => {
  if (currentLevelIndex === levelIndex) {
    return 'active';
  } if (currentLevelIndex > levelIndex) {
    return 'finished';
  }
  return 'inactive';
};

const getGameOptionButtonStatus = (currentOptionId, userAnswerId, gameStatus, correctAnswerId) => {
  if (currentOptionId !== userAnswerId) {
    return 'inactive';
  }
  switch (gameStatus) {
    case 'select':
      return 'inactive';
    case 'check':
      return 'selected';
    case 'result':
      return correctAnswerId === userAnswerId ? 'correct' : 'wrong';
    default:
      return null;
  }
};

export { getSidebarClasses, getGameStepButtonStatus, getGameOptionButtonStatus };
