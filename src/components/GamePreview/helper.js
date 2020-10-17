export const getGamePreviewText = (type, earned) => {
  switch (type) {
    case 'gameStart':
      return ({
        titleText: 'Who wants to be a millionaire?',
        buttonText: 'Start',
      });
    case 'gameOver':
      return ({
        titleText: `${earned} earned`,
        subtitleText: 'Total score:',
        buttonText: 'Try again',
      });
    default:
      return null;
  }
};

export const getGamePreviewClasses = (type) => {
  switch (type) {
    case 'gameStart':
      return 'game-preview--start';
    case 'gameOver':
      return 'game-preview--over';
    default:
      return null;
  }
};
