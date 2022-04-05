import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import MyTextarea from './../../styles/MyTextarea';
import { Button } from '@mui/material';

const Messages = (props) => {
  let dialogsRender = props.state.dialogsData
    .map((dialog, index) => <Dialog id={dialog.id} name={dialog.name} key={index} />),
    messagesRender = props.state.messagesData
    .map((message, index) => <Message text={message.text} key={index} />),
    elMessage = React.createRef(),
    addMessage = function() {
      let text = elMessage.current.value;
      console.log(text);
    };

  return (
    <div className={s.container}>
      <div className={s.dialogs}>
        {dialogsRender}
      </div>
      <div className={s.messages}>
        {messagesRender}
        <div className="textarea-box">
          <MyTextarea ref={elMessage} className={`textarea ${s.textarea}`}
            minRows={3}
            placeholder="Comments..."
          />
        </div>
        <div className="btn-box">
          <Button onClick={addMessage} variant="outlined">Send</Button>
        </div>
      </div>
    </div>
  )
}

export default Messages;
