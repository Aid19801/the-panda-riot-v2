import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { newsContainerLoaded, newsContainerLoading } from '../../redux/actions';
import NewsBox from './news-box';
import './styles.css';
import { Spinner } from '..';

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
        {this.props.stories &&
        this.props.stories.map((each, i) => {
            return <NewsBox {...each} key={i} />
        })}
          
          {/* {!this.props.stories && <Spinner />} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stories: state.newsApi.stories
});

const mapDispatchToProps = dispatch => ({
  containerLoading: () => dispatch(newsContainerLoading()),
  containerLoaded: () => dispatch(newsContainerLoaded())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsContainer);
