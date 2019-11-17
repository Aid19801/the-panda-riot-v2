import { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Router from 'next/router';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import { updateStateAppLoading } from '../../redux/actions/index';
import './styles.css';

class NavigationNonAuth extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    const location = Router.pathname.replace('/', '');
    const nextLocation = location === 'signin' ? 'signup' : 'signin';
    this.setState({ location, nextLocation: nextLocation });
  }

  updateStateLoading = () => {
    this.props.updateStateAppLoading();
  };


  render() {
    const { nextLocation } = this.state;
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

            <div className="nav-option-wrapper" onClick={() => this.updateStateLoading()}>
              <Link href={`/${nextLocation}`}>
                <a>
                  <div>{nextLocation}</div>
                </a>
              </Link>
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
)(NavigationNonAuth);
