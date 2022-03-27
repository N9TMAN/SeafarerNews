import React from 'react';
import s from './Dialog.module.css';
import MyLink from './../../../styles/MyLink';

const Dialog = (props) => {
  let path = '/messages/' + props.id;
  
  return (
    <MyLink to={path} className={s.dialog}>
      {props.name}
    </MyLink>
  )
}

export default Dialog;
