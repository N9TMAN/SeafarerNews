import React from 'react';
// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export default function Profile(props) {
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPosts state={props.state.postsData} />
    </div>
  )
}
