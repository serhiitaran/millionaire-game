import menuOpenIcon from '../../../assets/images/menu-open.svg';
import menuCloseIcon from '../../../assets/images/menu-close.svg';

const getGamePreviewClasses = (type) => {
  switch (type) {
    case 'menuOpen':
      return { src: menuOpenIcon, alt: 'Open menu' };
    case 'menuClose':
      return { src: menuCloseIcon, alt: 'Close menu' };
    default:
      return null;
  }
};

export default getGamePreviewClasses;
