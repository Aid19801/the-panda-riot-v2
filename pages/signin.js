import React from 'react';
// import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
import { connect } from 'react-redux';
import {
  signInPageLoading,
  signInPageLoaded,
  signInPageFailed
} from '../redux/actions';

class SignInPage extends React.Component {
  //   static async getInitialProps({ req }) {
  //     // const isServer = !!req
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const json = await res.json();

  //     return {
  //       users: json
  //     };
  //   }

  componentDidMount() {
    const { pageLoading } = this.props;
    pageLoading();
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

const mapStateToProps = state => ({
  loading: state.signIn.loading,
  error: state.signIn.error
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(signInPageLoading()),
  pageLoaded: () => dispatch(signInPageLoaded()),
  pageFailed: () => dispatch(signInPageFailed())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage);
