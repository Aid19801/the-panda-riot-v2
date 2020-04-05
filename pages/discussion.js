import { Link } from '../routes';
// import { Client, linkResolver } from '../components/prismic';
import { RichText } from 'prismic-reactjs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Head from 'next/head';
import moment from 'moment';
import { NextSeo } from 'next-seo';
import Router from 'next/router';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

import * as actions from '../redux/actions';
import { analyticsEvent, analyticsPage, trimStringSpecifically } from '../lib/utils';

import withAuth from '../HOCs/with-auth';
import withAnalytics from '../HOCs/with-ga';
import withProgressBar from '../HOCs/with-progress';
import withPage from '../HOCs/with-page';
import Firebase from '../HOCs/firebase';
import { DynamicImage, Spinner, Button } from '../components';

class DiscussionPage extends React.Component {

    static async getInitialProps({ reduxStore, req, query }) {
        const firebase = new Firebase();
        console.log('getInitialProps fired LOOKING FOR ID ========>>> ', query.id);
        const receivedContent = await firebase.discussion(query.id);
        console.log('receivedContent back: ', receivedContent);
        // analyticsPage(`v2-tpr-news-story`);
        // reduxStore.dispatch(actions.fetchTPRSuccess(receivedContent));
        return {
            discussion: receivedContent
        };
    }


    constructor() {
        super();
        this.state = {
            discussion: {},
            modal: true,
            newComment: '',
            error: null,
        }
    }



    componentWillMount() {
        this.props.showProgressBar(true);
        if (!this.props.discussion) {
            // if there's nothing in props, means you got here via CSR
            const location = window.location.href;
            const id = location.split('discussion/')[1];
            // so take ID out of address bar, fetch content
            this.fetchDiscussion(id);
        } else {
            this.setState({ discussion: this.props.discussion });
        }
        // this.fetchDiscussion();

    }
    componentDidMount = async () => {
        this.props.showProgressBar(false);
        setTimeout(() => {
            this.keepChecking(); // after 2 minutes, keep checking every 1 min
        }, 120000)
    };

    static fetchDiscussion = async (id) => {
        // const location = window.location.href;
        // const id = location.split('discussion/')[1];
        const obj = await this.props.firebase.discussion(id);
        this.setState({ discussion: obj });
    }

    keepChecking = () => {
        const location = window.location.href;
        const id = location.split('discussion/')[1];
        // setInterval(() => {
        //   console.log('re-loading discussion: ', id);
        //   this.fetchUpdatedDiscussion(id);
        // }, 60000)
    }

    // toggleModal = () => this.setState({ modal: !this.state.modal });

    setNewComment = (str) => this.setState({ newComment: str })

    handleSubmitComment = async (event) => {        
        event.preventDefault();
        
        const { uid, userProfile } = this.props;
        const { newComment, discussion } = this.state;
        const location = window.location.href;
        const id = location.split('discussion/')[1];

        const thisComment = {
          commentId: `${uid}_${Date.now()}`,
          discussionId: id,
          uid: uid,
          profilePicture: userProfile.profilePicture,
          username: userProfile.username,
          comment: newComment,
          timestamp: Date.now(),
        }
    
        let updatedComments = [
          ...discussion.comments,
          thisComment,
        ]
    
        let updatedDiscussionObject = {
          ...discussion,
          comments: updatedComments,
        }
        // this.toggleModal();
        this.setNewComment('');
        this.props.firebase.patchDiscussion(id, updatedDiscussionObject);
        this.fetchUpdatedDiscussion(id);
    }

    fetchUpdatedDiscussion = async (id) => {
        // const location = window.location.href;
        // const id = location.split('discussion/')[1];
        // setTimeout(async () => {
        //     const obj = await this.props.firebase.discussion(id);
        //     this.setState({ discussion: obj });
        // }, 500)
        
    }

    render() {
        const { discussion, modal } = this.state;
        const { userProfile } = this.props;

        return (
            <React.Fragment>
                <NextSeo
                    title={`${discussion.title}`}
                    description={`${discussion.subtitle}`}
                    openGraph={{
                        type: 'website',
                        url: `https://www.thePandaRiot.com/discussion/${discussion.id}`,
                        title: `TPR | ${discussion.title}`,
                        description: `TPR | ${discussion.subtitle}`,
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

                    {discussion && (
                        <div className="row flex-center">
                            <h1 className="discussion__title">{discussion.title}</h1>
                            <h2 className="discussion__subtitle">{discussion.subtitle}</h2>
                        </div>
                    )}

                    {discussion && discussion.comments && discussion.comments.map((each, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Fade>
                                    <div className="discussion__comment__container flex-col flex-start" id={each.uid === this.props.uid && "my_own_comment"}>
                                        <div className="flex-row space-between">

                                            <div className="flex-col cell-small">
                                                <DynamicImage onClick={() => Router.push(`/acts/${each.uid}`)} src={each.profilePicture} small />
                                                <p className="username grey white skew-left">{each.username}</p>
                                            </div>

                                            <p className="timestamp white">{moment(each.timestamp).format('DD/MM/YYYY')}</p>
                                        </div>

                                        <div className="flex-col">
                                            <p className="comment white">{each.comment}</p>
                                        </div>
                                    </div>
                                </Fade>
                            </React.Fragment>
                        )
                    })}

                    {discussion &&
                        (!discussion.comments || discussion.comments.length < 1 || discussion.comments === []) &&
                        <p className="white flex-center margin-top padding-on">Oh No! No one has said anything yet...</p>
                    }

                      {modal && (
                        <React.Fragment>
                          <Fade bottom big>
                            <div className="discussion__modal__container">
              
                              <div className="flex-col">
                                <p className="white flex-center">post your comment</p>
              
                                <div className="flex-row">
                                  <DynamicImage src={userProfile.profilePicture} small />
              
                                  <form onSubmit={this.handleSubmitComment} className="flex-center flex-col">
                                    <textarea onChange={(e) => this.setNewComment(e.target.value)} />
                                    <Button type="submit" text="post" />
                                  </form>
                                </div>
              
                              </div>
                              </div>
                          </Fade>
                        </React.Fragment>
                      )}

                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateStateAppLoading: () => dispatch(updateStateAppLoading()),
    updateStateAppLoaded: () => dispatch(actions.updateStateAppLoaded()),
});

const mapStateToProps = state => ({
    content: state.prismic.content,
    spinner: state.appState.spinner,
    uid: state.signIn.uid,
    userProfile: state.signIn.userProfile,
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
)(DiscussionPage);
