import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
import { connect } from 'react-redux';
import { startApp } from '../redux/actions';

class HomePage extends React.Component {
  static async getInitialProps({ req }) {
    // const isServer = !!req
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json();

    return {
      users: json
    };
  }

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
            url: 'https://www.thePandaRiot.com/gigs',
            title: 'FUCK OFF TITLE',
            description: 'Open Graph Description',
            images: [
              {
                url: 'https://www.example.ie/og-image.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt'
              },
              {
                url: 'https://www.example.ie/og-image-2.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt 2'
              }
            ]
          }}
        />
        <h1>users: {this.props.users && this.props.users.length}</h1>;
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
)(HomePage);
