import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Title,
  HeroImage,
  Subtitle,
} from '../shared';
import { getGamePreviewText, getGamePreviewClasses } from './helper';

import './GamePreview.css';

const GamePreview = (props) => {
  const { type, earned } = props;

  const { titleText, subtitleText, buttonText } = getGamePreviewText(type, earned);
  const gamePreviewClasses = getGamePreviewClasses(type);

  return (
    <div className={`game-preview ${gamePreviewClasses}`}>
      <div className="game-preview__wrapper">
        <div className="game-preview__hero-image">
          <HeroImage />
        </div>
        <div className="game-preview__description">
          {subtitleText && <Subtitle text={subtitleText} />}
          <Title text={titleText} />
          <Button text={buttonText} />
        </div>
      </div>
    </div>
  );
};

GamePreview.propTypes = {
  type: PropTypes.string.isRequired,
  earned: PropTypes.string,
};

GamePreview.defaultProps = {
  earned: 0,
};

export default GamePreview;
