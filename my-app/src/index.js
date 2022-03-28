import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {name: 'X', text: 'Gggggggg...'},
  {name: 'Y', text: 'Ssssssss...'},
];

let dialogsData = [
  {id: 1, name: 'Serg'},
  {id: 2, name: 'Nurlan'},
  {id: 3, name: 'Zerg'},
];

let messagesData = [
  {id: 1, text: 'Serg blah blah'},
  {id: 2, text: 'Nurlan blah blah'},
  {id: 3, text: 'Zerg blah blah'},
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
