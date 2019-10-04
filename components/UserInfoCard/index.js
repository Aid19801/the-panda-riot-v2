import React from 'react';
import ReactPlayer from 'react-player';
import SocialIcons from '../SocialIcons';
import TitleAndValue from '../TitleAndValue';
import './styles.css';

const UserInfoCard = ({
  faveGig,
  genre,
  rating,
  youtube,
  twitter,
  facebook,
  youtubeChannelURL,
  website
}) => {
  const opts = {
    height: '100%',
    width: 'auto',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  const _onReady = event => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  };

  const handleYouTubeLink = link => {
    let video_id = link.split('v=')[1];
    // let ampersandPosition = video_id.indexOf('&');
    // if (ampersandPosition && ampersandPosition !== -1) {
    //   video_id = video_id.substring(0, ampersandPosition);
    // }
    console.log('link was ', link);
    console.log('video_id was ', video_id);
    return video_id;
  };

  return (
    <div className="div__user-info-card-medium-container">
      <TitleAndValue title="Fave Gig: " value={faveGig} />
      <TitleAndValue title="Style: " value={genre} />
      <TitleAndValue title="Current Rating: " value={rating} />
      <div className="div__youtube-container">
        {youtube && (
          <>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${handleYouTubeLink(
                youtube
              )}`}
              playing
              width={`100%`}
              height={`100%`}
              youtubeConfig={{ playerVars: { showinfo: 1 } }}
            />
          </>
        )}

        {youtube === 'unknown' && (
          <img
            className="div__youtube no-youtube"
            src="https://www.internetvideoarchive.com/wp-content/uploads/2018/03/NOYT_380x190.png"
            alt="open mic comedian no youtube video"
          />
        )}
        {!youtube && (
          <img
            className="div__youtube no-youtube"
            src="https://www.internetvideoarchive.com/wp-content/uploads/2018/03/NOYT_380x190.png"
            alt="open mic comedian no youtube video"
          />
        )}
      </div>
      <SocialIcons
        facebook={facebook}
        twitter={twitter}
        youtube={youtubeChannelURL}
        website={website}
      />
    </div>
  );
};

export default UserInfoCard;
