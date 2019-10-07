import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NextSeo } from 'next-seo';
import withAuth from '../HOCs/with-auth';
import withAnalytics from '../HOCs/with-ga';
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
import { getFromCache } from '../lib/cache';
import '../lib/index.css';
// import { analyticsPage } from '../lib/utils';

class ChatPage extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.getUsersNameFromCache();
    // analyticsPage('v2-chat-page');
  }
  handleKeyUp = evt => {
    if (evt.keyCode === 13) {
      const user = evt.target.value;
      this.setState({ user });
    }
  };

  getUsersNameFromCache = async() => {
    let userName = '';
    try {
      const json = await getFromCache('user-profile-object');
      const userProfile = JSON.parse(json);
      console.log('user profile is ', userProfile.username);
      userName = userProfile.username;
    } catch (error) {
      console.log('getUsersNameFromCache | error: ', error);
      this.setState({ user: 'unverified' })
    }
    this.setState({ user: userName });
  }

  render() {
    const { user } = this.state;

    return (
      <div id="page-container" className="page__chatpage flex-center">
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
        <Banner src="/static/banner-ldn.jpg" />
        <FunkyTitle text="chat" />
        <div className="container">
          <div className="row">
            <ChatContainer
              handleKeyUp={this.handleKeyUp}
              user={user}
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
  withAnalytics,
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ChatPage);
