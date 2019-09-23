import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { newsContainerLoaded, newsContainerLoading } from '../../redux/actions';
import NewsBox from './news-box';
import './styles.css';
import { Spinner } from '..';
import BoxCard from '../Box-Card';

class NewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      stories: []
    };
  }

  componentWillMount() {
    this.props.containerLoading();
  }
  componentWillMount() {
    this.props.containerLoaded();
  }

  render() {
    return (
      <div className="row margin-top">

        { this.props.tpr_stories && this.props.tpr_stories.map((each, i) => {
          return (
            <BoxCard
              id={each.id}
              img={each.data["news-image"].url}
              headline={each.data["news-headline1"][0].text}
              blurb={each.data["news-body"][0].text}
              link={`https://www.thepandariot.com/news/${each.id}`}
              src="TPR"
            />
          )
        })}
        {this.props.stories &&
        this.props.stories.map((each, i) => {
            return <BoxCard {...each} key={i} />
        })}
          
          {/* {!this.props.stories && <Spinner />} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stories: state.newsApi.stories,
  tpr_stories: state.prismic.tpr_stories
});

const mapDispatchToProps = dispatch => ({
  containerLoading: () => dispatch(newsContainerLoading()),
  containerLoaded: () => dispatch(newsContainerLoaded())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsContainer);
