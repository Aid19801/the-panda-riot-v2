import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatMessage from '../ChatMessage';
import './styles.css';

const SAD_EMOJI = [55357, 56864];
const HAPPY_EMOJI = [55357, 56832];
const NEUTRAL_EMOJI = [55357, 56848];

class Chat extends Component {
  state = { chats: [] };

  componentDidMount() {
    // console.log('REACT_APP_PUSHER_APP_KEY: ', process.env.REACT_APP_PUSHER_APP_KEY)
    this.pusher = new Pusher(process.env.REACT_APP_PUSHER_APP_KEY, {
      cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
      encrypted: true
    });

    this.channel = this.pusher.subscribe('chat-room');

    this.channel.bind('new-message', ({ chat = null }) => {
      const { chats } = this.state;
      chat && chats.push(chat);
      this.setState({ chats });
    });

    this.pusher.connection.bind('connected', () => {
      axios.post('/messages').then(response => {
        const chats = response.data.messages;
        this.setState({ chats });
      });
    });
  }

  componentWillUnmount() {
    this.pusher.disconnect();
  }

  handleKeyUp = evt => {
    const value = evt.target.value;

    if (evt.keyCode === 13 && !evt.shiftKey) {
      const { activeUser: user } = this.props;
      const chat = { user, message: value, timestamp: +new Date() };

      evt.target.value = '';
      axios.post('/message', chat);
      if (process.browser) {
        setTimeout(() => {
          var element = document.querySelector('.chat__messages-container');
          element.scrollTop = element.scrollHeight;
        }, 300);
      }
    }
  };

  render() {
    return (
      this.props.activeUser && (
        <Fragment>
          <div className="chat__name-container" style={{ height: 90 }}>
            <h2>{this.props.activeUser}</h2>
          </div>
          <div
            className="chat__messages-container"
            style={{ height: 'calc(100% - 180px)', overflowY: 'scroll' }}
          >
            {this.state.chats.map((chat, index) => {
              const previous = Math.max(0, index - 1);
              const previousChat = this.state.chats[previous];
              const position =
                chat.user === this.props.activeUser ? 'right' : 'left';

              const isFirst = previous === index;
              const inSequence = chat.user === previousChat.user;
              const hasDelay =
                Math.ceil(
                  (chat.timestamp - previousChat.timestamp) / (1000 * 60)
                ) > 1;

              const mood =
                chat.sentiment > 0
                  ? HAPPY_EMOJI
                  : chat.sentiment === 0
                  ? NEUTRAL_EMOJI
                  : SAD_EMOJI;

              return (
                <Fragment key={index}>
                  {(isFirst || !inSequence || hasDelay) && (
                    <div
                      className={`d-block w-100 font-weight-bold text-dark mt-4 pb-1 px-1 text-${position}`}
                      style={{ fontSize: '0.9rem' }}
                    >
                      <span className="d-block" style={{ fontSize: '1.6rem' }}>
                        {String.fromCodePoint(...mood)}
                      </span>
                      <span>{chat.user || 'Anonymous'}</span>
                    </div>
                  )}
                  <ChatMessage message={chat.message} position={position} />
                </Fragment>
              );
            })}
          </div>
          <div
            className="chat__entry w-100 d-flex align-items-center orange"
          >
            <textarea
              className="form-control rounded-corners"
              onKeyUp={this.handleKeyUp}
              placeholder="Press ENTER / RETURN to send..."
              style={{ resize: 'none' }}
            ></textarea>
          </div>
        </Fragment>
      )
    );
  }
}

export default Chat;
