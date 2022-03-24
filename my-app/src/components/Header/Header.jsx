import Logo from './Logo';
import './Header.css';
import s from './Header.module.css';
import Search from './Search';
import HeaderBg from './HeaderBg';
import AccountMenu from './AccountMenu';
import SwitchTheme from './SwitchTheme';

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
