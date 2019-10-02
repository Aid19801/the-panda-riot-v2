import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
import { connect } from 'react-redux';
import { startApp } from '../redux/actions';
import { NavBar, FunkyTitle, BoxCard, Banner, CircleImage } from '../components';

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
      <div id="page-container" className="landing__page">
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: 'Yay this is a title',
            description: "London's freshest Open Mic Comedy webapp!",
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

        <NavBar />
        <Banner src="/static/banner-ldn.jpg" />

        <div className="container">
          <div className="row margin-top">
            <FunkyTitle text="Open Mic Starts Here" />
          </div>
          <div className="row margin-top">

              <BoxCard
                src="lp"
                img="https://images.vexels.com/media/users/3/157564/isolated/preview/d7d05c7c1070e49a5385019c254901a6-simple-laptop-icon-by-vexels.png"
                headline="WTF Is This?"
                blurb="The Panda Riot is a slick n sexy, brand new Web-App for open mic comedians and comedy fans in London."
              />

              <BoxCard
                src="lp"
                img="https://image.flaticon.com/icons/png/512/45/45944.png"
                headline="Find Gigs!"
                blurb="Find the latest gigs on the filterable gig map!"
              />

            <BoxCard
                src="lp"
                img="https://www.pngfind.com/pngs/m/83-832432_group-icon-png-white-people-png-icon-transparent.png"
                headline="Explore Other Acts!"
                blurb="Exchange ideas with other acts, explore other acts' profiles!"
              />
          </div>
          <div className="row">
            <CircleImage />
          </div>
        </div>
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
