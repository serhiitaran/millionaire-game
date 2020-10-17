import React, { useState } from 'react';
import './Game.css';

import { GameButton, Title, ButtonIcon } from '../shared';

const Game = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const onSidebarOpen = () => setSidebarVisible(true);
  const onSidebarClose = () => setSidebarVisible(false);

  const sidebarClasses = sidebarVisible ? 'game-sidebar' : 'game-sidebar game-sidebar--hidden';

  return (
    <div className="game">
      <div className="game-main">

        <ButtonIcon type="menuOpen" onButtonClick={onSidebarOpen} />
        <Title size="medium" text="How old your elder brother was 10 years before you was born, mate?" />

        <div className="game-options">
          <GameButton type="option" id="A" value="First" />
          <GameButton type="option" id="B" value="Second" />
          <GameButton type="option" id="C" value="Third" />
          <GameButton type="option" id="D" value="Fourth" />
        </div>
      </div>
      <div className={sidebarClasses}>
        <ButtonIcon type="menuClose" onButtonClick={onSidebarClose} />
        <div className="game-steps">
          <GameButton type="step" value="$ 1,000,000" />
          <GameButton type="step" value="Second" />
          <GameButton type="step" value="Third" />
          <GameButton type="step" value="Fourth" />
          <GameButton type="step" value="First" />
          <GameButton type="step" value="Second" />
          <GameButton type="step" value="Third" />
          <GameButton type="step" value="Fourth" />
          <GameButton type="step" value="First" />
          <GameButton type="step" value="Second" />
          <GameButton type="step" value="Third" />
          <GameButton type="step" value="Fourth" />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Game;
