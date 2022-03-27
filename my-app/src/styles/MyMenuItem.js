import MenuItem from '@mui/material/MenuItem';
import { styled } from "@mui/material/styles";

const MyMenuItem = styled(MenuItem)(() => ({
  padding: '0',
  borderRadius: '4px',
  overflow: 'hidden',
  minHeight: 'auto',
}));

export default MyMenuItem;
