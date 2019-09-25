import React from 'react';
import { connect } from 'react-redux';
import { getDevice, gotDevice } from '../redux/actions';

const WithResponsivityHOC = PlatformSpecificComponent => {
  class withResponsive extends React.Component {
    static async getInitialProps(ctx) {
      const pageProps =
        PlatformSpecificComponent.getInitialProps &&
        (await PlatformSpecificComponent.getInitialProps(ctx));
      return { ...pageProps, query: ctx.query };
    }

    componentDidMount = () => {
        if (process.browser) {
            // console.log('AT | yeah')
            this.props.updateStateGettingDevice();
            let isMobile = (window.innerWidth < 576);
            // console.log('AT | ismobile is back ', isMobile);
            return this.props.updateStateGotDevice(isMobile);
        }
    }

    render() {
        return (
            <PlatformSpecificComponent {...this.props} />
        )
    }
  }

  const mapDispatchToProps = dispatch => ({
      updateStateGettingDevice: () => dispatch(getDevice()),
      updateStateGotDevice: (bool) => dispatch(gotDevice(bool))
  })
  return connect(null, mapDispatchToProps)(withResponsive);
};

export default WithResponsivityHOC;
