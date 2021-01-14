import Menu from '../Menu/Menu';
import classNames from 'classnames';
import { forHeader as config } from '../../configs/configForComponents';
import PropTypes from 'prop-types';
import './Header.css';

/**
 * @module Header
 * @description Функциональный компонент<br>
 * Хэдер, блок содержит логотип и меню навигации по сайту.<br>
 * Принимает в пропсах объект с настройками блока - config и параметры.
 * @property {Boolean} isLoggedIn - стейт состяния пользователя: авторизован/не авторизован
 * @property {Function} onLogInClick - колбэк, вызывается при клике по кнопке "Авторизоваться"
 *  или ссылке "Войти", открывает попап авторизации
 * @property {Function} onLogOutClick - колбэк, переводит состояние пользователя в "не авторизован"
 * @property {JSX} children - JSX-фрагмент, на главной странице через него передается форма поиска новостей
 * @property {Function} onMenuButtonClick - колбэк, открывает скрытое меню на мобильном разрешении
 * @property {Boolean} isMobileMenuOpened - стейт открытого состояния мобильного меню
 * @property {Boolean} isPopupOpened - стейт открытого состояния одного из попапов
 * @property {Function} onOverlayClick - колбэк, закрывает попапы при клике по оверлею
 * @returns {JSX}
 * @since v.1.0.0
 */
function Header({ onMenuButtonClick, isMobileMenuOpened, onOverlayClick }) {
  const { HEADER_LOGO_TEXT } = config;

  const headerContainerClassName = classNames('header__container', {
    header__container_mobile: isMobileMenuOpened,
  });

  const headerMobileMenuButtonClassName = classNames('header__menu-button', {
    'header__menu-button_not-pressed': !isMobileMenuOpened,
    'header__menu-button_pressed': isMobileMenuOpened,
  });

  const headerMobileMenuOverlayClassName = classNames('overlay', {
    'header__menu-mobile-overlay': isMobileMenuOpened,
  });

  return (
    <header className="header">
      <div className={headerContainerClassName}>
        <p className="header__logo">{HEADER_LOGO_TEXT}</p>
        <Menu isMobile={false} isMobileMenuOpened={isMobileMenuOpened} />
        <button
          type="button"
          onClick={onMenuButtonClick}
          className={headerMobileMenuButtonClassName}
        />
      </div>
      <div className={headerMobileMenuOverlayClassName} onClick={onOverlayClick}>
        <Menu isMobile={true} isMobileMenuOpened={isMobileMenuOpened} />
      </div>
    </header>
  );
}

Header.propTypes = {
  onMenuButtonClick: PropTypes.func.isRequired,
  isMobileMenuOpened: PropTypes.bool.isRequired,
  onOverlayClick: PropTypes.func.isRequired,
};

export default Header;
