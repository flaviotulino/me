import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setArticle, setCategory } from '../actions/blog';
import { withRouter } from 'react-router-dom';
import Loader from '../components/Loader';
import { BlogService } from '../services/BlogService';
import { setResults } from '../actions/search';
import { setSearchBarAutofocus } from '../actions/elements';
import ArticleList from '../components/ArticleList';

class SearchContainer extends Component {
    async componentDidMount() {
        let {unsetAll, history, setResults, location, dispatchSearchBarAutoFocus} = this.props;
        unsetAll();

        if (!location.search) {
            return dispatchSearchBarAutoFocus();
        }

        const results = await BlogService.search(history.location.search.replace(/\?q=/, ''));

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
        const {results, location} = this.props;
        if (!location.search) return false;

        if (!results) return <Loader/>;

        return (
            <div className="search container">
                <h1>I found {results.length} result{results.length > 1 ? 's': ''} for "{location.search.replace(/\?q=/, '')}"</h1>
                <ArticleList articles={results} />
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
