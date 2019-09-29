import React from 'react';
import './styles.css';

const FunkyTitle = ({ text, isActName }) => (
  <div className="title__container col-sm-12">
    <h1 className={ isActName ? `title act__name` : `title` }>{text}</h1>
  </div>
);

export default FunkyTitle;