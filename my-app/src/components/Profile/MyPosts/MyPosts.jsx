import React from 'react';
import s from './MyPosts.module.css';
import './MyPosts.css';
import MyTextarea from './../../../styles/MyTextarea';
import { Button } from '@mui/material';
import Post from './Post/Post';

export default function MyPosts(props) {
  let postsRender = props.state.map((post, index) => <Post name={post.name} text={post.text} key={index}/>),
    elPost = React.createRef(),
    addPost = function() {
      let text = elPost.current.value;
      props.addPost(text);
      elPost.current.value = '';
  };

  return (
    <div className="myposts">
      <div className="textarea-box">
        <MyTextarea ref={elPost} className={`textarea ${s.textarea}`}
          minRows={3}
          placeholder="Comments..."
        />
      </div>
      <Button onClick={addPost} variant="outlined">Send</Button>
      <div className="post-box">
        { postsRender }
      </div>
    </div>
  )
}

