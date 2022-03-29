import React from 'react';
import { AvatarGroup } from '@mui/material';
import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {
  console.log(props, "friends")
  let friendsRender = props.state.friendsData.map(friend => <Friend name={friend.name} />)

  return (
    <div className={s.box}>
      <AvatarGroup total={friendsRender.length}>
        {friendsRender}
      </AvatarGroup>
    </div>
  )
}

export default Friends;
