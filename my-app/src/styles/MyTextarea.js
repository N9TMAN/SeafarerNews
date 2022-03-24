import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from "@mui/material/styles";

const MyTextarea = styled(TextareaAutosize)(() => ({
  width: '100%',
  backgroundColor: 'initial',
  color: 'initial',
}));

export default MyTextarea;
