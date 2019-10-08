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

  componentDidMount = async () => {
    // debugger;
    const stringJson = await cache.getFromCache('user-profile-object');

    setTimeout(async () => {
      const obj = JSON.parse(stringJson);
  
      // if theres a profile pic in cache, lock into cachedPic const
      let cachedPic = '';
  
  
      if (!obj) {
        return cachedPic = null;
      }
      
      if (obj && obj !== null && obj.profilePicture && obj.profilePicture !== '') {
        cachedPic = obj.profilePicture;
      }
      if (obj && obj !== null && !obj.profilePicture || obj.profilePicture === '') {
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
      this.setState({ uid: cacheUID })
    }, 2000)
   
  };

  handleClick = () => {
    this.setState({ popOut: !this.state.popOut });
  };

  render() {
    const { uid } = this.state;
    const { popOut, profilePic } = this.state;

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
                      : ''
                  }
                />
              </div>
              {popOut && (
                <div className="nav__my-acc__popout" onClick={this.handleClick}>
                  <Link href="/me"><a>My Account</a></Link>
                  <Link href={`/acts/${uid}`}><a>My Profile</a></Link>
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
