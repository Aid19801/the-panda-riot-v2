import { useState, useEffect } from 'react';
import Chat from '../Chat';
import './styles.css';
import ChatInput from '../ChatInput';

function ChatContainer(props) {
  return (
    <div className="col-sm-12">
              <span
                className="d-block w-100 h1 text-light"
              >
                {props.user ? (
                  <span>
                    <span style={{ color: '#999' }}>Hello!</span> {props.user}
                  </span>
                ) : (
                  `What is your name?`
                )}
              </span>

              {!props.user && (
                <ChatInput
                  handleKeyUp={props.handleKeyUp}
                  placeholder="what's your name?"
                />
              )}



          <div className="">
            {props.user && <Chat activeUser={props.user} />}
          </div>
    </div>
  );
}

export default ChatContainer;
