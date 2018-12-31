import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import { setQuery } from '../actions/search';

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(event) {
    event.preventDefault();

    const { history, query } = this.props;
    history.push({
      pathname: '/articles/search',
      search: `?q=${query}`,
    });
  }

  render() {
    const { query, setQuery, searchBarAutoFocus } = this.props;

    return (
      <div className="search-bar-container">
        <SearchBar query={query} onChange={setQuery} onSubmit={this.search} autoFocus={searchBarAutoFocus} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  query: state.search.query || '',
  searchBarAutoFocus: state.elements.searchBarAutoFocus,
});

const mapDispatchToProps = dispatch => ({
  setQuery(query) {
    dispatch(setQuery(query));
  },
});

SearchBarContainer.propTypes = {
  history: PropTypes.any,
  query: PropTypes.string,
  setQuery: PropTypes.func,
  searchBarAutoFocus: PropTypes.bool,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer));
