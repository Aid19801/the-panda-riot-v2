import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NextSeo } from 'next-seo';
import withAuth from '../HOCs/with-auth';
import {
  FunkyTitle,
  Input,
  NavBar,
  Banner,
  Chat,
  ChatContainer
} from '../components';
import {
  chatPageLoading,
  chatPageLoaded,
  chatPageFailed
} from '../redux/actions';

import '../lib/index.css';

class ChatPage extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  handleKeyUp = evt => {
    if (evt.keyCode === 13) {
      const user = evt.target.value;
      this.setState({ user });
    }
  };

  render() {
    const { user } = this.state;

    return (
      <div id="page-container" className="page__chatpage border-on flex-center">
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: `Chat Page`,
            description:
              "Chat about various topics relating to London's electric open mic comedy scene.",
            images: [
              {
                url: 'https://i.ytimg.com/vi/kQBHzHBMlM4/hqdefault.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt'
              },
              {
                url:
                  'https://pbs.twimg.com/profile_images/498909008292347904/8EkJ3yZ-_400x400.png',
                width: 800,
                height: 600,
                alt: 'Og Image Alt 2'
              }
            ]
          }}
        />
        <NavBar firebase={this.props.firebase} />
        <Banner src="https://www.king-apparel.com/media/wysiwyg/our-story-king-apparel-banner.jpg" />
        <FunkyTitle text="chat" />
        <div className="container">
          <div className="row">
            <ChatContainer
              handleKeyUp={this.handleKeyUp}
              user={this.state.user}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ chat }) => ({
  isLoading: chat.isLoading
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(chatPageLoading()),
  pageLoaded: () => dispatch(chatPageLoaded()),
  pageFailed: () => dispatch(chatPageFailed())
});

export default compose(
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ChatPage);
