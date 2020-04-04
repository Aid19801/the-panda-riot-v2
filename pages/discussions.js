import { Link } from '../routes';
// import { Client, linkResolver } from '../components/prismic';
import { RichText } from 'prismic-reactjs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Head from 'next/head';
import moment from 'moment';
import { NextSeo } from 'next-seo';
import Prismic from 'prismic-javascript';

import { DynamicImage, Spinner } from '../components';

import * as actions from '../redux/actions';

import { prismicEndpoint } from '../lib/prismic';
import withAuth from '../HOCs/with-auth';
import { analyticsEvent, analyticsPage, trimStringSpecifically } from '../lib/utils';
import withAnalytics from '../HOCs/with-ga';
import withProgressBar from '../HOCs/with-progress';
import withPage from '../HOCs/with-page';

class DiscussionsPage extends React.Component {

    constructor() {
        super();
        this.state = {
            discussions: [],
            error: null,
        }
    }

    componentWillMount() {
        this.props.showProgressBar(true);

    }
    componentDidMount = async () => {
        // TO-DO - put the client side fetching in here, if routing from home page.
        // analyticsPage(`web-discussions-page`);
        // analyticsEvent(`web-discussions-page`);
        setTimeout(() => {
            this.props.showProgressBar(false);
        }, 500);
        this.props.updateStateAppLoaded();
        // console.log('AT | 1:');
        try {
            // console.log('AT | 2:');
            const res = await this.props.firebase.discussions();
            // console.log('AT | 3:');
            this.setState({ discussions: res });
            // console.log('AT | 4:');
        } catch (e) {
            // console.log('AT | 5:', e);
            this.setState({ error: e });
        }
    };

    render() {
        const { discussions } = this.state;
        const { spinner } = this.props;

        if (spinner) {
            return <Spinner />
        }

        return (
            <>
                <NextSeo
                    title="Discussions on The Panda Riot"
                    description="An area to vent, rant, share ideas and support one another."
                    openGraph={{
                        type: 'website',
                        url: `https://www.thePandaRiot.com/discussions`,
                        title: `The Panda Riot | Discussions`,
                        description: "An area to vent, rant, share ideas and support one another.",
                        images: [
                            {
                                url: 'https://pbs.twimg.com/profile_images/498909008292347904/8EkJ3yZ-_400x400.png',
                                width: 800,
                                height: 600,
                                alt: 'Open Mic Comedy Audience'
                            },
                            {
                                url:
                                    'https://pbs.twimg.com/profile_images/498909008292347904/8EkJ3yZ-_400x400.png',
                                width: 800,
                                height: 600,
                                alt: 'Open Mic Comedy Discussions Forum'
                            }
                        ],
                        site_name: '#ThePandaRiot'
                    }}
                />

                <Head>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/498909008292347904/8EkJ3yZ-_400x400.png" />
                    <meta name="twitter:creator" content="@aidThompsin" />
                    <meta name="twitter:site" content="@thePandaRiot" />
                </Head>

                <div className="container margin-bottom">
                    <div className="row flex-center">

                        {discussions && discussions.map((each, i) => {
                            return (
                                <div onClick={() => routeToDiscussion(each.id)} className="col-sm-10 discussions__row flex-row space-around" key={i}>
                                    <div className="cell-small flex-col">
                                        <DynamicImage src={each.startedBy.profilePicture} small />
                                        <p className="bold white">{each.startedBy.username}</p>
                                    </div>

                                    <div className="cell-large flex-start flex-col">
                                        <h4 className="heading flex-start">{each.title}</h4>
                                        <p className="discussions__blurb">{trimStringSpecifically(each.subtitle, 200)}</p>
                                    </div>

                                    <div className="flex-col">
                                        <div className="cell-small discussions__timepost">{moment(each.timestamp).format('DD/MM/YYYY')}</div>
                                        <div className="cell-small">posts: {each.comments.length}</div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateStateFetchArticle: () => dispatch(actions.fetchTPRStory()),
    updateStateGotArticle: res => dispatch(actions.fetchTPRSuccess(res)),
    updateStateAppLoading: () => dispatch(updateStateAppLoading()),
    updateStateAppLoaded: () => dispatch(actions.updateStateAppLoaded()),
});

const mapStateToProps = state => ({
    content: state.prismic.content,
    spinner: state.appState.spinner,
});
export default compose(
    withPage,
    withProgressBar,
    withAnalytics,
    withAuth,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(DiscussionsPage);
