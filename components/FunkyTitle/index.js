import React from 'react';
import './styles.css';

const FunkyTitle = ({ text }) => (
  <div className="title__container col-sm-9">
    <h1 className="title">{text}</h1>
  </div>
);

export default FunkyTitle;