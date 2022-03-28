import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Messages = (props) => {
  let dialogsRender = props.dialogsData
  .map( dialog => <Dialog id={dialog.id} name={dialog.name} />);
  let messagesRender = props.messagesData
  .map( message => <Message text={message.text} />);

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
