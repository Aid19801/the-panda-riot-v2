import React from 'react';
import './styles.css';

const Chatbox = ({ message }) => (
    <div className="chat-box margin-bottom">
    <div className="chat-message">
        <img 
            className="chat-msg-img" 
            src={message.img}
            width={45}
            height={45}
            alt="open mic comedian chat message"
        />

        <div className="chat-msg-col padding-left">
        <p className="p__tpr-blurb msg-from white margin-off orange bold-thick">{message.from}</p>
        <p className="p__tpr-blurb">{message.content}</p>
        </div>
    </div>
    </div>
);

export default Chatbox;
