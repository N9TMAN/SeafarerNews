import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Divider from '@mui/material/Divider';
import Cloud from '@mui/icons-material/Cloud';
import HomeIcon from '@mui/icons-material/Home';

export default function TypographyMenu() {
  return (
    <Paper className="navbar-box" sx={{ width: 230, color: 'inherit', backgroundColor: 'inherit', boxShadow: 'none' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon sx={{ color: 'inherit'}}>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>Home</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <NewspaperIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>News</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            A very long text that overflows
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
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
