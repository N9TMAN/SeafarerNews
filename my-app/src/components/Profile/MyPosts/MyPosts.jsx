import React from 'react';
import s from './MyPosts.module.css';
import './MyPosts.css';
import MyTextarea from './../../../styles/MyTextarea';
import { Button } from '@mui/material';
import Post from './Post/Post';

export default function MyPosts(props) {
  let postsRender = props.postsData.map( post => <Post name={post.name} text={post.text} />)

  return (
    <div className="myposts">
      <div className="textarea-box">
        <MyTextarea className={`textarea ${s.textarea}`}
          minRows={3}
          placeholder="Comments..."
        />
      </div>
      <Button variant="outlined">Send</Button>
      <div className="post-box">
        { postsRender }
      </div>
    </div>
  )
}

