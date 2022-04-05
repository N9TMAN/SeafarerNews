import {renderApp} from '../render';

let state = {
  profilePage: {
    postsData: [
      {name: 'X', text: 'Gggggggg...'},
      {name: 'Y', text: 'Ssssssss...'},
      {name: 'W', text: 'wwwWWWWW...'},
      {name: 'H', text: 'hhhhhhhhhhhHWWww...'},
    ],
  },
  messagesPage: {
    dialogsData: [
      {id: 1, name: 'Serg'},
      {id: 2, name: 'Nurlan'},
      {id: 3, name: 'Zerg'},
    ],
    messagesData: [
      {id: 1, text: 'Serg blah blah'},
      {id: 2, text: 'Nurlan blah blah'},
      {id: 3, text: 'Zerg blah blah'},
    ]
  },
  friendsPage: {
    friendsCount: 5,
    friendsData: [
      {name: 'Alex'},
      {name: 'Sergey'},
      {name: 'Igor'},
      {name: 'Igor'},
      {name: 'Igor'},
      {name: 'Igor'},
    ],
  }
}

export let addPost = (text) => {
  let newPost = {
    name: undefined || 'Unnamed',
    text: text,
  }

  state.profilePage.postsData.push(newPost);

  console.log('state', state.profilePage.postsData);
  renderApp(state);
}

export default state;
