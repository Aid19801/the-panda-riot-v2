import React, { useState, useEffect } from 'react';
import './styles.css';

const ProfilePic = ({ srcProp, editable, handleEditProfilePicture }) => {

  const [ newSrc, updateNewSrc ] = useState(srcProp);
  
  useEffect(() => {
    updateNewSrc(srcProp);
  }, []);

  useEffect(() => {
    updateNewSrc(srcProp);
  }, [srcProp]);


  if (editable) {
    return (
      <div id="cc" className="contained-height-width">
        <div className="circle contained-height-width" id="five"></div>
        <div className="circle contained-height-width" id="four"></div>
        <div className="circle contained-height-width" id="three"></div>
        <div className="circle contained-height-width" id="two"></div>
        <div className="circle contained-height-width" id="one">
          <img
            className="contained-height-width"
                 src={newSrc ? newSrc : '/static/no_prof_pic.png'}
          />
          <p className="editable-prof-pic__p white" onClick={handleEditProfilePicture}>Edit?</p>
        </div>
      </div>
    );
  }
  return (
    <div className="circular-img">
      <img
        className="contained-height-width circular-image"
        src={newSrc ? newSrc : '/static/no_prof_pic.png'}
        />
    </div>
  );
};

export default ProfilePic;
