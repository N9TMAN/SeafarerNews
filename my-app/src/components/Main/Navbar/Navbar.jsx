import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
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

export default function TypographyMenu() {
  return (
    <Paper className="navbar-box" sx={{ width: 230, color: 'inherit', backgroundColor: 'inherit', boxShadow: 'none' }}>
      <MenuList>
        <MenuItem sx={{ padding: '0' }}>
          <MyLink to="/">
            <ListItemIcon sx={{ color: 'inherit' }}>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Home</Typography>
          </MyLink>
        </MenuItem>
        <MenuItem sx={{ padding: '0' }}>
          <MyLink to="/news">
            <ListItemIcon>
              <NewspaperIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>News</Typography>
          </MyLink>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ padding: '0' }}>
          <MyLink to="/profile">
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Profile</Typography>
          </MyLink>
        </MenuItem>
        <MenuItem sx={{ padding: '0' }}>
          <MyLink to="/messages">
            <ListItemIcon>
              <ForumIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Messages</Typography>
          </MyLink>
        </MenuItem>
        <MenuItem sx={{ padding: '0' }}>
          <MyLink to="/music">
            <ListItemIcon>
              <LibraryMusicIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>Music</Typography>
          </MyLink>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ padding: '0' }}>
          <MyLink to="/settings">
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MyLink>
        </MenuItem>
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
