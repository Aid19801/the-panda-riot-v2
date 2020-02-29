import React from 'react';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { compose } from 'redux';

import '../lib/index.css';
import withAuthentication from '../HOCs/with-auth';

class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  static doFoo() {
      return 'doo foo';
  }
  static async getInitialProps() {
    // console.log('==== ABOUT get initial props =====');
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json();
    // console.log('==== json =====', json.length);
    return {
      users: json
    };
  }

  async componentDidMount() {}

  componentDidUpdate = nextProps => {
    // console.log('nextProps: ', nextProps);
  };

  render() {
    if (process.browser) {
        // console.log(' about props ==> ', this.props);
    }
    
    return (
      <div id="page-container">
        <h1 className="funky-title">About</h1>
        <p>About page</p>
      </div>
    );
  }
}

export default compose(
    withAuthentication,
    connect(null, null),
    )(AboutPage)


