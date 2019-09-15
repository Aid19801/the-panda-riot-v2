import { Component } from 'react';
// import { compose } from 'redux';
import { connect } from 'react-redux';
import ReactMapboxGL, { Cluster, Marker } from 'react-mapbox-gl';
import './styles.css';

const MapBoxMap = ReactMapboxGL({
    accessToken: process.env.REACT_APP_MAPBOX_KEY
});

let clusterMarkerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50, width: 50, background: '#0F2751',
    borderRadius: '50%',
}

class Map extends Component {
    constructor() {
        super();
        this.state = {
            coordinates: [],
            total: null,
            leaves: [],
            posts: [],
        }
        this.zoom = [9];
    }
    
    componentDidMount = () => {
      this.storePostsFromReduxInState()
      // load gigs in from state.gigs.data
      // if state.gigs.filteredGigs !== state.gigs.data setState to that
      // render out gigs
      
    }

    onMove = () => {
        return;
    };

    onStyleLoad = (map) => {
        const { onStyleLoad } = this.props;
        return onStyleLoad && onStyleLoad(map);
    };

    
    storePostsFromReduxInState = () => {
        const { gigs } = this.props;
        if (gigs && gigs.length !== 0) {
            this.setState({ gigs: gigs })
        }
    }

    render() {
        // console.log('this.props MAP level ', this.props)
        if (this.state.isLoading) {
            return <h2>Loading...</h2>
        }

        if (!this.state.isLoading) {

            return (
                <div className="foo">

                    <MapBoxMap
                        style="mapbox://styles/mapbox/streets-v9"
                        center={[-0.1255, 51.5090]}
                        zoom={this.zoom}
                        containerStyle={{
                          height: "695px",
                        }}
                        onStyleLoad={this.onStyleLoad} 
                        onMove={this.onMove}
                    >

                    </MapBoxMap>
                </div>
            );
        }

        }
}


const mapStateToProps = (state) => ({
    gigs: state.gigs.data,
});

export default connect(mapStateToProps, null)(Map);