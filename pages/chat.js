import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NextSeo } from 'next-seo';
import withPageLayout from '../HOCs/with-page';
import withAnalytics from '../HOCs/with-ga';
import {
  FunkyTitle,
  Input,
  NavBar,
  Banner,
  Chat,
  ChatContainer,
  Spinner,
} from '../components';
import {
  chatPageLoading,
  chatPageLoaded,
  chatPageFailed,
  updateStateAppLoaded
} from '../redux/actions';
import { getFromCache } from '../lib/cache';
import '../lib/index.css';
import withProgressBar from '../HOCs/with-progress';
// import { analyticsPage } from '../lib/utils';

class ChatPage extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentWillMount() {
    this.props.showProgressBar(true);
  }

  componentDidMount() {
    this.getUsersNameFromCache();
    // analyticsPage('v2-chat-page');
    this.props.appLoaded();
    setTimeout(() => {
      this.props.showProgressBar(false);
    }, 300);
    
  }
  handleKeyUp = evt => {
    if (evt.keyCode === 13) {
      const user = evt.target.value;
      this.setState({ user });
    }
  };

  getUsersNameFromCache = async () => {
    let userName = '';
    try {
      const json = await getFromCache('user-profile-object');
      const userProfile = JSON.parse(json);
      // console.log('user profile is ', userProfile.username);
      userName = userProfile.username;
    } catch (error) {
      console.log('getUsersNameFromCache | error: ', error);
      this.setState({ user: 'unverified' });
    }
    this.setState({ user: userName });
  };

  render() {
    const { user } = this.state;
    const { spinner } = this.props;

    if (spinner) {
      return <Spinner />
    }

    return (
      <div>
        <NextSeo
          title="The Panda Riot | CHAT"
          description="Chat with other acts and promoters on London's favourite Open Mic Comedy web-app"
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com/chat',
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
        <div className="container border-on">
          <div className="row">
            <ChatContainer handleKeyUp={this.handleKeyUp} user={user} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ chat, appState }) => ({
  isLoading: chat.isLoading,
  spinner: appState.spinner,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(chatPageLoading()),
  pageLoaded: () => dispatch(chatPageLoaded()),
  appLoaded: () => dispatch(updateStateAppLoaded()),
  pageFailed: () => dispatch(chatPageFailed())
});

export default compose(
  withProgressBar,
  withAnalytics,
  withPageLayout,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ChatPage);
