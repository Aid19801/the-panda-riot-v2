import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newsContainerLoaded, newsContainerLoading } from '../../redux/actions';
import BoxCard from '../Box-Card';
import './styles.css';
import Link from 'next/link';

class NewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      isMobile: false,
    };
  }

  componentWillMount() {
    this.props.containerLoading();
  }

  componentDidMount() {
    this.props.containerLoaded();
  }


  render() {
    const { tpr_stories, stories, isMobile } = this.props;
    return (

      <div className="col-sm-12 flex-center flex-col">

        <div className="news__news-container__container row margin-top">


          { stories && !isMobile && stories.slice(0, 2).map((each, i) => {
            return <BoxCard {...each} key={i} />
          })}

          {tpr_stories && !isMobile && tpr_stories.slice(0, 3).map((each, i) => {
            return (
              <>
                <BoxCard
                  id={each.id}
                  key={i}
                  img={each.data["news-image"].url}
                  headline={each.data["news-headline1"][0].text}
                  blurb={each.data["news-body"][0].text}
                  link={`https://www.thepandariot.com/news/${each.id}`}
                  src="TPR"
                />
              </>
            )
          })}

          {stories && isMobile && stories.slice(0, 2).map((each, i) => {
            return <BoxCard {...each} key={i} />
          })}

          {tpr_stories && isMobile && (
            <>
              <BoxCard
                id={tpr_stories[0].id}
                img={tpr_stories[0].data["news-image"].url}
                headline={tpr_stories[0].data["news-headline1"][0].text}
                blurb={tpr_stories[0].data["news-body"][0].text}
                link={`https://www.thepandariot.com/news/${tpr_stories[0].id}`}
                src="TPR"
              />
            </>
          )}

        </div>

        <Link href="/news">
          <a className="tpr__link padding-on margin-on">
            <h2>More News...</h2>
          </a>
        </Link>


      </div>
    );
  }
}

const mapStateToProps = state => ({
  stories: state.newsApi.stories,
  tpr_stories: state.prismic.tpr_stories,
  isMobile: state.responsive.isMobile,
});

const mapDispatchToProps = dispatch => ({
  containerLoading: () => dispatch(newsContainerLoading()),
  containerLoaded: () => dispatch(newsContainerLoaded())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsContainer);
