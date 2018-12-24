import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { setQuery  } from '../actions/search';
import { withRouter } from 'react-router-dom';

class SearchBarContainer extends Component {
    search(event) {
        event.preventDefault();

        const {history, query} = this.props;
        history.push({
            pathname: '/articles/search',
            search: `?q=${query}`
        });
    }

    render() {
        const {query, setQuery, searchBarAutoFocus} = this.props;
        const search = this.search.bind(this);

        return (
            <div className="search-bar-container">
                <SearchBar query={query} onChange={setQuery} onSubmit={search} autoFocus={searchBarAutoFocus}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    query: state.search.query || '',
    searchBarAutoFocus: state.elements.searchBarAutoFocus
});

const mapDispatchToProps = dispatch => ({
    setQuery(query) {
        dispatch(setQuery(query));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer));
