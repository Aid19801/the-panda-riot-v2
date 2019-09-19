import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { newsContainerLoaded, newsContainerLoading } from '../../redux/actions';
import NewsBox from './news-box';
import './styles.css';

class NewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            stories: [],
        }
    }

    componentWillMount() {
        this.props.containerLoading();
    }
    componentWillMount() {
        this.props.containerLoaded();
    }

    render() {
        return (
            <div className="row">

                <div className="col-sm-12">
                    <h4>News</h4>
                </div>
                { !this.props.stories && <h1>Loading...</h1> }
                { this.props.stories && this.props.stories.map((each, i) => <NewsBox {...each} key={i} />)}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    stories: state.newsApi.stories,
});

const mapDispatchToProps = dispatch => ({
    containerLoading: () => dispatch(newsContainerLoading()),
    containerLoaded: () => dispatch(newsContainerLoaded()),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)