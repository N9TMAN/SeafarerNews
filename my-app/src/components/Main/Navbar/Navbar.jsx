import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MyMenuItem from './../../../styles/MyMenuItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import MyLink from "./../../../styles/MyLink";
import SettingsIcon from '@mui/icons-material/Settings';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import s from './Navbar.module.css';
import './Navbar.css';

export default function TypographyMenu() {
  return (
    <Paper className={`navbar-box ${s.navbar}`} sx={{ width: 230, color: 'inherit', backgroundColor: 'inherit', boxShadow: 'none' }}>
      <MenuList>
        <MyMenuItem>
          <MyLink to="/">
            <ListItemIcon sx={{ color: 'inherit' }}>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Home</Typography>
          </MyLink>
        </MyMenuItem>
        <MyMenuItem>
          <MyLink to="/news">
            <ListItemIcon>
              <NewspaperIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>News</Typography>
          </MyLink>
        </MyMenuItem>
        <Divider />
        <MyMenuItem>
          <MyLink to="/profile">
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Profile</Typography>
          </MyLink>
        </MyMenuItem>
        <MyMenuItem>
          <MyLink to="/messages">
            <ListItemIcon>
              <ForumIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Messages</Typography>
          </MyLink>
        </MyMenuItem>
        <MyMenuItem>
          <MyLink to="/music">
            <ListItemIcon>
              <LibraryMusicIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Music</Typography>
          </MyLink>
        </MyMenuItem>
        <Divider />
        <MyMenuItem>
          <MyLink to="/settings">
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MyLink>
        </MyMenuItem>
      </MenuList>
    </Paper >
  );
}



// const Navbar = () => {
//   return (
//     <nav className="nav">
//       Nav
//       <div className="nav-box">
//         <a href="#">Home</a>
//         <a href="#">About</a>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;
