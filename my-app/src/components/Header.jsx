import Logo from './Logo';
// import Button from '@mui/material/Button';
// import MyButton from './../styles/MyButton';
// import { NewButton } from './../styles/MyButton';
// import MuiNav from './MuiNav';
import Search from './Search';
import HeaderBg from './HeaderBg';
import AccountMenu from './AccountMenu';
import SwitchTheme from './SwitchTheme';

const Header = () => {
  return (
    <header className="header unselect">
      <div className="container">
        <HeaderBg />
        <div className="header-box">
          <Logo />
          <Search />
        </div>
        <div className="header-nav">
          <SwitchTheme />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}

export default Header;
