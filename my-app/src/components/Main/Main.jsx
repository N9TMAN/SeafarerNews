import React from 'react';
import s from './Main.module.css';
import Navbar from './Navbar/Navbar';
import Messages from './../Messages/Messages';
import Profile from './../Profile/Profile';
import Home from './../Home/Home'
import { Route, Routes } from 'react-router-dom';
import News from './../News/News';
import Music from './../Music/Music';
import Settings from './../Settings/Settings';

// let headerStyleHeight = document.querySelector('.main');
// let root = document.querySelector('.app');

// console.log(root);

const Main = (props) => {
  return (
    <main className="main">
      <div className={`container ${s.container}`}>
        <Navbar className={s.navbar} />
        <div className={s.content}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/profile' element={<Profile postsData={props.postsData} />} />
            <Route path='/messages' element={<Messages dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </main>
  )
}

export default Main;
