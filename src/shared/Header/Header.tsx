import { Link, useLocation } from 'react-router-dom';
//@ts-ignore
import logoImg from '../../img/header-logo.svg';
//@ts-ignore
import drawerImg from '../../img/basket-icon.svg';
import './Header.css';

function Header() {
    const location = useLocation();

    let header: any = [];

    if (location.pathname === '/') {
        header = <div className="header__logo-wrapper transparent-link">
                    <img className="header__logo" src={logoImg} alt="Логотип пиццы" />
                </div>
    } else if (location.pathname === '/cart') {
        header = <Link to="/" className="header__logo-wrapper transparent-link">
                    <img className="header__logo" src={logoImg} alt="Логотип пиццы" />
                </Link>
    }

    return (
        <header className="header">
            {header}
            <Link to="/cart" className="header__drawer-wrapper transparent-link">
                <div className="header__text-amount">
                    520 ₽
                </div>
                <img className="header__drawer-img" src={drawerImg} alt="Корзина" />
                <div className="header__text-amount">
                    3
                </div>
            </Link>
        </header>
    );
}

export default Header;
