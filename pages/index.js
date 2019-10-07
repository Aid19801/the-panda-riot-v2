import React from 'react';
import { NextSeo } from 'next-seo';
import { connect } from 'react-redux';
import { startApp } from '../redux/actions';
import { NavBar, FunkyTitle, BoxCard, Banner, CircleImage, ProfilePic } from '../components';
import mockGigs from '../lib/mock-gigs.json';
class LandingPage extends React.Component {

  constructor() {
    super();
    this.state = {
      gigs: null,
    }
  }

  componentDidMount() {
    const { updateStateStartApp } = this.props;
    updateStateStartApp();
    this.handleGigsArray();
  }

  handleGigsArray = () => {
    const arr = mockGigs.gigs;
  
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

  let trim = arr.slice(0, 24);

  let shuffled = shuffle(trim);

    this.setState({ gigs: shuffled });
  }

  render() {

  const { gigs } = this.state;

    return (
      <div id="page-container" className="landing__page">
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: 'The Panda Riot.',
            description: "The go-to web-app for London's electric open mic comedy circuit.",
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
          
          <div className="row flex-center black box-shadow">
            { gigs && gigs.map((each, i) => {
              if (each.img) {
                return <ProfilePic key={i} srcProp={each.img} />
              }
            }) }
          </div>

          <div className="row flex-center black box-shadow">
            { gigs && gigs.map((each, i) => {
              if (each.img) {
                return <ProfilePic key={i} srcProp={each.img} />
              }
            }) }
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
