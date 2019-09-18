import React from 'react';
import './styles.css';

const ProfilePic = ({ srcProp }) => (
  <div className="div__profile-pic-container">
    <img src={srcProp} width={150} height={150} />
  </div>
);

export default ProfilePic;
