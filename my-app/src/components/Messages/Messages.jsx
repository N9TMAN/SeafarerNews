import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Messages = (props) => {
  let dialogsData = [
    {id: 1, name: 'Serg'},
    {id: 2, name: 'Nurlan'},
    {id: 3, name: 'Zerg'},
  ];

  let dialogsNew = dialogsData.map( dialog => <Dialog id={dialog.id} name={dialog.name} />);

  let messagesData = [
    {id: 1, text: 'Serg blah blah'},
    {id: 2, text: 'Nurlan blah blah'},
    {id: 3, text: 'Zerg blah blah'},
  ];

  let messagesNew = messagesData.map( message => <Message text={message.text} />);

  return (
    <div className={s.container}>
      <div className={s.dialogs}>
        {dialogsNew}
      </div>
      <div className={s.messages}>
        {messagesNew}
      </div>
    </div>
  )
}

export default Messages;
