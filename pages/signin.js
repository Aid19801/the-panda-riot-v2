import React from 'react';
// import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
import { connect } from 'react-redux';
import {
  signInPageLoading,
  signInPageLoaded,
  signInPageFailed
} from '../redux/actions';
import Input from '../components/Input';

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
            title: 'Sign In',
            description: 'Sign in to the panda riot open mic comedy webapp!',
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
        <h1>Sign In: </h1>;
        <Input
          title="email"
          onChange={e => console.log(e)}
          placeholder="abc@abc.com"
        />
        <Input
          title="password"
          onChange={e => console.log(e)}
          placeholder="password here"
        />
        
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
