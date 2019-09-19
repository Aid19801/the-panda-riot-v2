import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
import { connect } from 'react-redux';
import { startApp } from '../redux/actions';
import { NavBar } from '../components';

class LandingPage extends React.Component {
  // static async getInitialProps({ req }) {
  //   // const isServer = !!req
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const json = await res.json();

  //   return {
  //     users: json
  //   };
  // }

  componentDidMount() {
    const { updateStateStartApp } = this.props;
    updateStateStartApp();
  }

  render() {
    return (
      <div>
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: 'Yay this is a title',
            description: 'London\'s freshest Open Mic Comedy webapp!',
            images: [
              {
                url: 'https://i.ytimg.com/vi/kQBHzHBMlM4/hqdefault.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt'
              },
              {
                url: 'https://pbs.twimg.com/profile_images/498909008292347904/8EkJ3yZ-_400x400.png',
                width: 800,
                height: 600,
                alt: 'Og Image Alt 2'
              }
            ]
          }}
        />
        <NavBar />
        <h1>this is homepage</h1>;
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateStateStartApp: () => dispatch(startApp())
});

export default connect(
  null,
  mapDispatchToProps
)(LandingPage);
