import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { newsContainerLoaded, newsContainerLoading } from '../../redux/actions';
import BoxCard from '../Box-Card';
import './styles.css';

class NewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
    };
  }

  componentWillMount() {
    this.props.containerLoading();
  }

  componentDidMount() {
    this.props.containerLoaded();
  }


  render() {
    return (

      <div className="col-sm-12 flex-center">

        <div className="news__news-container__container row margin-top">

          {this.props.tpr_stories && this.props.tpr_stories.map((each, i) => {
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
          {this.props.stories &&
            this.props.stories.map((each, i) => {
              return <BoxCard {...each} key={i} />
            })}

        </div>
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
