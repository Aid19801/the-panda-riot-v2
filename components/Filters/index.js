import React from 'react';
import { filters as staticFilters } from './filters';
import { connect } from 'react-redux';
import { fetchFilters, filtersChanged, filtersLoaded } from '../../redux/actions';
import './styles.css';

// 1. Filters takes in an array of gigs via props.
// 2. Locks them and filters in state.
// 3. when user clicks on button, the filters change
// 4. Filters re-filters the gigs back down again, and again
// 5. Each time it calls gotGigsFromGist(arr) and the component renders
// the new array out wherever

class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount = () => {
    this.props.loadInFiltersFromRedux();
    this.setState({
      results: this.props.arr // load in gigs via props
    });
    if (this.props.filters) {
        console.log('filters exist!')
        this.props.updateStateFiltersLoaded();
    }
  };

  handleClick = id => {
    const optionToChange = this.props.filters.filter(each => each.id === id)[0];
    let updatedFilters = this.props.filters.filter(each => each.id !== id);
    // let updatedFilters = [];
    let updatedOption = {
      ...optionToChange,
      active: !optionToChange.active
    };
    updatedFilters.push(updatedOption);
    
    let sortedFilters = updatedFilters.sort((a, b) => {
        var textA = a.id;
        var textB = b.id;
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    this.props.updateStateFilteredGigs(sortedFilters);
  };

  render() {
    const { filters } = this.props;
    return (
      <div className="filters__container">
        <h4>Filters</h4>
        {this.props.filters && filters.map((each, i) => (
          <button
            disabled={each.active}
            onClick={() => this.handleClick(each.id)} key={i}
            style={ each.active ? { color: 'green' } : { color: 'red' }}
            >
            {each.name}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters.filters,
  gigs: state.gigs.data,
});

const mapDispatchToProps = dispatch => ({
  loadInFiltersFromRedux: () => dispatch(fetchFilters()),
  updateStateFiltersLoaded: () => dispatch(filtersLoaded()),
  updateStateFilteredGigs: arr => dispatch(filtersChanged(arr))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
