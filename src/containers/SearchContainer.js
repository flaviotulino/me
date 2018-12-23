import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setArticle, setCategory } from '../actions/blog';
import { withRouter } from 'react-router-dom';
import Loader from '../components/Loader';
import { BlogService } from '../services/BlogService';
import { setResults } from '../actions/search';
import SearchResultList from '../components/SearchResultList';
import { setSearchBarAutofocus } from '../actions/elements';

class SearchContainer extends Component {
    async componentDidMount() {
        let {unsetAll, history, setResults, location, dispatchSearchBarAutoFocus} = this.props;
        unsetAll();

        if (!location.search) {
            dispatchSearchBarAutoFocus();
        }

        const results = await BlogService.search(history.location.search);

        const getResults = results.items.map(async (result) => {
            const [category, article] = result.path.split('/');
            const info = await BlogService.getArticle({category, article});

            return {
                ...result,
                ...info
            }
        });

        Promise.all(getResults).then(results => {
            setResults(results);
        })

    }

    componentDidUpdate({location}) {
        const prevSearch = this.props.location.search;
        const newSearch = location.search;

        if (prevSearch !== newSearch) {
            this.componentDidMount();
        }
    }

    render() {
        const {results} = this.props;
        if (!results) return <Loader/>;

        return (
            <div>
                <SearchResultList results={results}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    results: state.search.results
});

const mapDispatchToProps = dispatch => ({
    unsetAll() {
        dispatch(setCategory(null));
        dispatch(setArticle(null));
        dispatch(setResults(null));
    },
    setResults(results) {
        dispatch(setResults(results));
    },
    dispatchSearchBarAutoFocus() {
        dispatch(setSearchBarAutofocus(true));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchContainer));
