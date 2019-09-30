import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { ProfilePic, SignOutButton } from '../index';
import Link from 'next/link';
import * as cache from '../../lib/cache';

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

  componentWillMount = async () => {
    const jsonObj = await cache.getFromCache('user-profile-object');
    const cachedPic = JSON.parse(jsonObj).profilePicture;
    
    // const cacheUID = await cache.getFromCache('uid');
    if (cachedPic) {
      this.setState({ profilePic: cachedPic });
    }
    if (!cachedPic) {
      // const newPic = this.fetchProfilePicFromFirebase();
      this.setState({ profilePic: 'https://png.pngtree.com/svg/20170602/user_circle_1048392.png' });
    }
    // this.setState({ uid: cacheUID })
  };

  handleClick = () => {
    this.setState({ popOut: !this.state.popOut });
  };

  render() {
    const { uid } = this.state;
    const { popOut, profilePic } = this.state;
    console.log('props ', this.props)
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <Link href="/"><a>The Panda Riot</a></Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="div__flex-row">
              <div className="nav-option-wrapper">
                <Link href="/home"><a>Home</a></Link>
              </div>

              <div className="nav-option-wrapper">
                <Link href="/gigs"><a>Gigs</a></Link>
              </div>

              <div className="nav-option-wrapper">
                <Link href="/acts"><a>Acts</a></Link>
              </div>

              <div className="nav-option-wrapper">
                <Link href="/chat"><a>Chat</a></Link>
              </div>
            </div>

            <div className="nav-option-wrapper nav__prof-pic-container">
              <div className="nav__prof-pic" onClick={this.handleClick}>
                <ProfilePic
                  srcProp={
                    profilePic && profilePic !== ''
                      ? profilePic
                      : 'https://png.pngtree.com/svg/20170602/user_circle_1048392.png'
                  }
                />
              </div>
              {popOut && (
                <div className="nav__my-acc__popout" onClick={this.handleClick}>
                  <Link href="/me"><a>My Account</a></Link>
                  <Link href={`/user?id=${uid}`}><a>My Profile</a></Link>
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

export default NavigationAuth;
