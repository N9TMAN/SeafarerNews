import React from 'react';
import s from './Main.module.css';
import Navbar from './Navbar/Navbar';
import Messages from './../Messages/Messages';
import Profile from './../Profile/Profile';

// let headerStyleHeight = document.querySelector('.main');
// let root = document.querySelector('.app');

// console.log(root);

const Main = () => {
  return (
    <main className="main">
      <div className={`container ${s.container}`}>
        <Navbar className={s.navbar}/>
        <div className={s.content}>
          <Profile />
          <Messages />
        </div>
      </div>
    </main>
  )
}

export default Main;
