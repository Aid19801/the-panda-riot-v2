import { Link } from '../routes';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { NextSeo } from 'next-seo';
import Prismic from 'prismic-javascript';

import { Spinner } from '../components';

import * as actions from '../redux/actions';

import { prismicEndpoint } from '../lib/prismic';
import withAuth from '../HOCs/with-auth';
import withAnalytics from '../HOCs/with-ga';
import withProgressBar from '../HOCs/with-progress';
import withPage from '../HOCs/with-page';
// import withFunding from '../HOCs/with-funding';

class DownloadsPage extends React.Component {

    componentWillMount() {
        this.props.showProgressBar(true);
    }
    componentDidMount = async () => {
        // TO-DO - put the client side fetching in here, if routing from home page.
        // analyticsPage(`v2-tpr-news-story`);
        setTimeout(() => {
            this.props.showProgressBar(false);
        }, 500);
        this.props.updateStateAppLoaded();
    };

    render() {
        const { content, spinner } = this.props;

        if (spinner) {
            return <Spinner />
        }

        return (
            <React.Fragment>
                <NextSeo
                    title="Downloads | The Panda Riot"
                    description="Find gigs using London's favourite Open Mic Comedy app"
                    openGraph={{
                        type: 'website',
                        url: 'https://www.thePandaRiot.com',
                        title: `Downloads | The Panda Riot`,
                        description: 'MacOS & PC desktop apps are here and ready for you to download you cheeky tinkers...',
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

                <div className="container downloads__container">
                    <div className="row margin-top flex-center">

                        <div className="col-sm-12 flex-center margin-bottom">
                            <h1>Desktop App</h1>
                        </div>

                        <div className="col-sm-3">
                            <Link href="/downloads/mac">
                                <a>
                                    <p>Mac</p>
                                    <div className="icon__clap">
                                        <img src="/static/applelogo.png" height={150} width={150} alt="orange apple logo" />
                                    </div>

                                </a>
                            </Link>
                        </div>

                        <div className="col-sm-3">

                            <Link href="/downloads/pc">
                                <a>
                                    <p>Windows</p>
                                    <div className="icon__clap">
                                        <img src="/static/windows.png" height={150} width={150} alt="orange Windows logo" />
                                    </div>
                                </a>
                            </Link>

                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    // updateStateFetchArticle: () => dispatch(actions.fetchTPRStory()),
    // updateStateGotArticle: res => dispatch(actions.fetchTPRSuccess(res)),
    updateStateAppLoading: () => dispatch(updateStateAppLoading()),
    updateStateAppLoaded: () => dispatch(actions.updateStateAppLoaded()),
});

const mapStateToProps = state => ({
    spinner: state.appState.spinner,
});
export default compose(
    // withFunding,
    withPage,
    withProgressBar,
    withAnalytics,
    withAuth,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(DownloadsPage);
