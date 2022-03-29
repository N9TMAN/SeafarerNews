import { Avatar } from '@mui/material';
import React from 'react';

const Friend = (props) => {
  return (
    <Avatar alt={props.name} src="/static/images/avatar/1.jpg" />
  )
}

export default Friend;
