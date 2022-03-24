import { Button } from "@mui/material"
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)(() => ({
  borderRadius: '15px',
  backgroundColor: 'transparent',
  boxShadow: 'none'
}));

export const NewButton = styled(MyButton)(() => ({
  borderRadius: '0px'
}));

export default MyButton;
