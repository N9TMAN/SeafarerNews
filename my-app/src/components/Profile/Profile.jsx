import React from 'react';
import './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

export default function Profile() {
  return (
    <div className="profile">
      <MyPosts />
      Profile
    </div>
  )
}
