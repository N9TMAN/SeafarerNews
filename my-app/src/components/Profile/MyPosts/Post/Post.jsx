import { Avatar } from '@mui/material';
import React from 'react';

export default function Post(props) {

  return (
    <div className="post">
      <Avatar
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        B
      </Avatar>
      <span>{props.name}, {props.text}</span>
    </div>
  )
}

