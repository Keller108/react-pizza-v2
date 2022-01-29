import { Link } from 'react-router-dom';
import logoImg from '../../img/header-logo.svg';
import drawerImg from '../../img/basket-icon.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
        <div className="header__logo-wrapper transparent-link">
            <img className="header__logo" src={logoImg} alt="Логотип пиццы" />
        </div>
        <div className="header__drawer-wrapper transparent-link">
            <div className="header__text-amount">
                520 ₽
            </div>
            <img className="header__drawer-img" src={drawerImg} alt="Корзина" />
            <div className="header__text-amount">
                3
            </div>
        </div>
    </header>
    );
}

export default Header;
