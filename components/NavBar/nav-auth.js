import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Router from 'next/router';

import { ProfilePic, SignOutButton } from '../index';
import Link from 'next/link';
import * as cache from '../../lib/cache';
import { updateStateAppLoading } from '../../redux/actions';

import './styles.css';

class NavigationAuth extends Component {
  constructor() {
    super();
    this.state = {
      profilePic: null,
      popOut: false,
      uid: null
    };
  }

  componentDidMount = async () => {
    // debugger;
    const stringJson = await cache.getFromCache('user-profile-object');

    setTimeout(async () => {
      const obj = JSON.parse(stringJson);

      // if theres a profile pic in cache, lock into cachedPic const
      let cachedPic = '';

      if (!obj) {
        return (cachedPic = null);
      }

      if (
        obj &&
        obj !== null &&
        obj.profilePicture &&
        obj.profilePicture !== ''
      ) {
        cachedPic = obj.profilePicture;
      }
      if (
        (obj && obj !== null && !obj.profilePicture) ||
        obj.profilePicture === ''
      ) {
        cachedPic = null;
      }

      const cacheUID = await cache.getFromCache('uid');

      // if cachedPic exists, pop in state to render out in Navbar
      if (cachedPic) {
        this.setState({ profilePic: cachedPic });
      }

      // if there's no pic in cached, set the state/nav to the placeholder image
      if (!cachedPic) {
        // const newPic = this.fetchProfilePicFromFirebase();
        this.setState({ profilePic: '/static/no_prof_pic.png' });
      }
      // lock uid into local state too
      this.setState({ uid: cacheUID });
    }, 2000);

    // find current location, store in state
    this.findLocationAdjustNavOptions();
  };

  findLocationAdjustNavOptions = () => {
    const location = Router.pathname.replace('/', '');
    const allOptions = ['Home', 'News', 'Acts', 'Chat', 'Gigs'];
    const options = allOptions.filter(each => each.toLocaleLowerCase() !== location);
    this.setState({ options });
  }

  handleClick = () => {
    this.setState({ popOut: !this.state.popOut });
  };

  updateStateLoading = () => {
    this.props.updateStateAppLoading();
  };

  render() {
    const { uid, options } = this.state;
    const { popOut, profilePic } = this.state;

    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>

          <div
            onClick={() => this.updateStateLoading()}
          >
            <Link href="/">
              <a>The Panda Riot</a>
            </Link>
          </div>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="div__flex-row">
              {options &&
                options.map((each, i) => (
                  <div
                    key={i}
                    className="nav-option-wrapper"
                    onClick={() => this.updateStateLoading()}
                  >
                    <Link href={`/${each.toLowerCase()}`}>
                      <a>{each}</a>
                    </Link>
                  </div>
                ))}
            </div>

            <div className="nav-option-wrapper nav__prof-pic-container">
              <div className="nav__prof-pic" onClick={this.handleClick}>
                <ProfilePic
                  srcProp={profilePic && profilePic !== '' ? profilePic : ''}
                />
              </div>
              {popOut && (
                <div className="nav__my-acc__popout" onClick={this.handleClick}>
                  <Link href="/me">
                    <a>
                      <div onClick={() => this.updateStateLoading()}>
                        My Account
                      </div>
                    </a>
                  </Link>
                  <Link href={`/acts/${uid}`}>
                    <a>
                      <div onClick={() => this.updateStateLoading()}>
                        My Profile
                      </div>
                    </a>
                  </Link>
                  {this.props.isAdmin && (
                    <div className="nav__admin-option">
                      <Link href="https://des-lynham.prismic.io/documents/working~l=en-gb/">
                        <a target="_blank">
                          <h4>Write Blog</h4>
                        </a>
                      </Link>
                    </div>
                  )}
                  <SignOutButton firebase={this.props.firebase} />
                </div>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateStateAppLoading: () => dispatch(updateStateAppLoading())
});
export default connect(
  null,
  mapDispatchToProps
)(NavigationAuth);
