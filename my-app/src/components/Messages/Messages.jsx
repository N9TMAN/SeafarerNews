import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Messages = (props) => {
  let dialogsRender = props.state.dialogsData
  .map((dialog, index) => <Dialog id={dialog.id} name={dialog.name} key={index}/>);
  let messagesRender = props.state.messagesData
  .map((message, index) => <Message text={message.text} key={index}/>);

  return (
    <div className={s.container}>
      <div className={s.dialogs}>
        { dialogsRender }
      </div>
      <div className={s.messages}>
        { messagesRender }
      </div>
    </div>
  )
}

export default Messages;
