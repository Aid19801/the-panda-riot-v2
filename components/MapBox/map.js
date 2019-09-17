import { Component } from 'react';
// import { compose } from 'redux';
import { connect } from 'react-redux';
import PostMarkers from './markers';
import ReactMapboxGL, { Cluster, Marker } from 'react-mapbox-gl';
import * as actions from '../../redux/actions';
import './styles.css';

const MapBoxMap = ReactMapboxGL({
  accessToken: process.env.REACT_APP_MAPBOX_KEY
});

let clusterMarkerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 50,
  width: 50,
  background: '#0F2751',
  borderRadius: '50%'
};

class Map extends Component {
  constructor() {
    super();
    this.state = {
      coordinates: [],
      // center: null,
      center: [-0.1255, 51.5090],
      total: null,
      leaves: [],
      posts: [],
      zoom: [9],
      toggle: false
    };
    // this.zoom = [9];
  }

  componentDidMount = () => {
    this.storeGigsFromReduxInState();

  };

  onMove = () => {
    return;
  };

  onStyleLoad = map => {
    const { onStyleLoad } = this.props;
    return onStyleLoad && onStyleLoad(map);
  };

  storeGigsFromReduxInState = () => {
    const { gigs } = this.props;
    if (gigs && gigs.length !== 0) {
      this.setState({ gigs: gigs });
    }
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.selectedGig && this.state.toggle === false) {
      const newCenter = [ this.props.selectedGig.lng, this.props.selectedGig.lat ];
      console.log('newCenter ', newCenter);
      setTimeout(() => {
        this.setState({ toggle: true, center: [ this.props.selectedGig.lng, this.props.selectedGig.lat ]})
      }, 500)
    }
    if (prevProps.selectedGig !== this.props.selectedGig) {
      setTimeout(() => {
        this.setState({ center: [ this.props.selectedGig.lng, this.props.selectedGig.lat ]})
      }, 500)
    }
    if (prevProps.gigs !== this.props.gigs) {
      this.setState({ gigs: this.props.gigs})
    }
  }

  clusterClick = (coordinates, total, getLeaves) => {
    // console.log('coords clicked: ', coordinates);
    this.setState({
      clickedCluster: true,
      center: [coordinates[0], coordinates[1]],
      // lng: coordinates[0],
      // lat: coordinates[1],
      zoom: [14]
    });
  };

  clusterMarker = (coordinates, pointCount, getLeaves) => {
    // console.log('clusterMarker ', coordinates, pointCount, getLeaves);
    return (
      <Marker
        key={coordinates.toString()}
        gig
        exists
        coordinates={coordinates}
        style={clusterMarkerStyle}
        onClick={this.clusterClick.bind(
          this,
          coordinates,
          pointCount,
          getLeaves
        )}
      >
        <div className="div__cluster">
          <p className="p__cluster small white margin-off flex-center">{`Zoom In (${pointCount})`}</p>
        </div>
      </Marker>
    );
  };

  handleSelectMarker = data => {
    let newPaneInfo = {
      isSelected: true,
      heading: data.name,
      subheading: `@ ${data.venue}`,
      paragraph: data.blurb,
      nights: data.nights,
      img: data.img,
      imgs: data.imgs,
      lng: data.lng,
      lat: data.lat,
      walkins: data.walkins,
      walkinSignUp: data.walkinSignUp,
      prebook: data.prebook,
      prebookSignUp: data.prebookSignUp,
      bringer: data.bringer,
      nearestTubes: data.nearestTubes,
      twitterHandle: data.twitterHandle,
      website: data.website,
      howToBook: data.howToBook,
      venue: data.venue
    };
    this.setState({ zoom: [14], center: [data.lng, data.lat], toggle: true });

    this.props.updateStateSelectedMarker(newPaneInfo);
  };

  render() {
    // const { updateStateSelectedMarker } = this.props;\
    const { selectedGig } = this.props;
    console.log('this.props MAP level ', this.props);

    if (this.state.isLoading) {
      return <h2>Loading...</h2>;
    }

    if (!this.state.isLoading) {
      return (
        <div className="map__container tpr__border">
          <MapBoxMap
            style="mapbox://styles/mapbox/streets-v9"
            center={this.state.center}
            zoom={selectedGig ? [14] : [11]}
            containerStyle={{
              height: '350px'
            }}
            onStyleLoad={this.onStyleLoad}
            onMove={this.onMove}
          >
            <Cluster ClusterMarkerFactory={this.clusterMarker}>
              {this.state.gigs &&
                this.state.gigs.map((each, key) => (
                  <PostMarkers
                    key={key}
                    data={each}
                    handleClick={() => this.handleSelectMarker(each)}
                    coordinates={[each.lng, each.lat]}
                  />
                ))}
            </Cluster>
          </MapBoxMap>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  gigs: state.gigs.data,
  selectedGig: state.gigs.selectedGig
});

const mapDispatchToProps = dispatch => ({
  updateStateSelectedMarker: obj => dispatch(actions.userSelectedGig(obj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
