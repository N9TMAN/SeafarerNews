import React from 'react';
import { AvatarGroup } from '@mui/material';
import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {
  let friendsRender = props.state.friendsData.map((friend, index) => <Friend name={friend.name} key={index}/>)

  return (
    <div className={s.box}>
      <AvatarGroup total={friendsRender.length}>
        {friendsRender}
      </AvatarGroup>
    </div>
  )
}

export default Friends;
