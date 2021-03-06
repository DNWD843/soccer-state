import React from 'react';
import Navigation from '../Navigation/Navigation';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Menu.css';

/**
 * @module Menu
 * @description Меню, блок содержит меню навигации по сайту и кнопку меню на мобильном разрешении.<br>
 * @property {Boolean} isMobile -стейт состояния меню - мобильное (на мобильном разрешении)
 * @property {Boolean} isMobileMenuOpened - стейт открытого состояния мобильного меню
 * @returns {JSX}
 * @since v.1.0.0
 */
function Menu({ isMobile, isMobileMenuOpened }) {
  const menuClassName = classNames('menu', {
    menu_mobile: isMobile,
    menu_desktop: !isMobile,
    menu_opened: isMobileMenuOpened,
  });

  return (
    <div className={menuClassName}>
      <Navigation isMobile={isMobile} />
    </div>
  );
}

Menu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isMobileMenuOpened: PropTypes.bool.isRequired,
};

export default Menu;
