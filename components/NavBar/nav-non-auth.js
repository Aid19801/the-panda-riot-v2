import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import './styles.css';

class NavigationNonAuth extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/home">The Panda Riot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="nav-option-wrapper">
              <Link href="/"><a>Landing Page</a></Link>
            </div>
            <div className="nav-option-wrapper">
              <Link href="/signin"><a>Sign In</a></Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationNonAuth;
