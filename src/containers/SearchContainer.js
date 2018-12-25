import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setArticle, setCategory } from '../actions/blog';
import { withRouter } from 'react-router-dom';
import Loader from '../components/Loader';
import { BlogService } from '../services/BlogService';
import { setResults } from '../actions/search';
import { setSearchBarAutofocus } from '../actions/elements';
import ArticleList from '../components/ArticleList';
import queryString from 'query-string';


class SearchContainer extends Component {
    async componentDidMount() {
        let {unsetAll, setResults, search, dispatchSearchBarAutoFocus} = this.props;
        unsetAll();

        if (!search) {
            return dispatchSearchBarAutoFocus();
        }

        const results = await BlogService.search(search);

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
        const {results, search} = this.props;
        if (!search) return false;

        if (!results) return <Loader/>;

        return (
            <div className="search container">
                <h1 className="title">I found {results.length} result{results.length > 1 ? 's': ''} for "{search}"</h1>
                <ArticleList articles={results} />
            </div>
        )
    }
}

const mapStateToProps = (state, {location}) => ({
    results: state.search.results,
    get search () {
        const params = queryString.parse(location.search);
        return params.q;
    }
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
