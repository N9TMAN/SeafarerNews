import { NavLink } from "react-router-dom"
import { styled } from "@mui/material/styles";

const MyLink = styled(NavLink)(() => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: "inherit",
  padding: "6px 16px",
  width: '100%',
}));

export default MyLink;
