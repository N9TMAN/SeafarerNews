import Logo from './Logo/Logo';
import './Header.css';
import s from './Header.module.css';
import Search from './Search/Search';
import HeaderBg from './Bg/HeaderBg';
import AccountMenu from './Navbar/AccountMenu';
import SwitchTheme from './Navbar/SwitchTheme';

const Header = () => {
  return (
    <header className='header unselect'>
      <div className={`container ${s.container}`}>
        <HeaderBg />
        <div className={s.box}>
          <Logo />
          <Search />
        </div>
        <div className={s.nav}>
          <SwitchTheme />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}

export default Header;
