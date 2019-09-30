import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NextSeo } from 'next-seo';
import withAuth from '../HOCs/with-auth';
import { FunkyTitle, Input, NavBar, Banner, Chat } from '../components';
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

    const nameInputStyles = {
      background: 'transparent',
      color: '#999',
      border: 0,
      borderBottom: '1px solid #666',
      borderRadius: 0,
      fontSize: '3rem',
      fontWeight: 500,
      boxShadow: 'none !important'
    };

    return (
      <div id="page-container" className="page__homepage border-on flex-center">
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

        <main className="container-fluid position-absolute h-100 bg-dark">
          <div className="row position-absolute w-100 h-100">
            <section className="col-md-8 d-flex flex-row flex-wrap align-items-center align-content-center px-5">
              <div className="px-5 mx-5">
                <span
                  className="d-block w-100 h1 text-light"
                  style={{ marginTop: -50 }}
                >
                  {user ? (
                    <span>
                      <span style={{ color: '#999' }}>Hello!</span> {user}
                    </span>
                  ) : (
                    `What is your name?`
                  )}
                </span>

                {!user && (
                  <input
                    type="text"
                    className="form-control mt-3 px-3 py-2"
                    onKeyUp={this.handleKeyUp}
                    autoComplete="off"
                    style={nameInputStyles}
                  />
                )}
              </div>
            </section>

            <section className="col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0">
              {user && <Chat activeUser={user} />}
            </section>
          </div>
        </main>
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
