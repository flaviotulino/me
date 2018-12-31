import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { setArticle, setCategory } from '../actions/blog';
import Loader from '../components/Loader';
import BlogService from '../services/BlogService';
import { setResults } from '../actions/search';
import { setSearchBarAutofocus } from '../actions/elements';
import ArticleList from '../components/ArticleList';


class SearchContainer extends Component {
  async componentDidMount() {
    const {
      unsetAll, setResults, search, dispatchSearchBarAutoFocus,
    } = this.props;
    unsetAll();

    if (!search) {
      return dispatchSearchBarAutoFocus();
    }

    const results = await BlogService.search(search);

    const getResults = results.items.map(async (result) => {
      const [category, article] = result.path.split('/');
      const info = await BlogService.getArticle({ category, article });

      return {
        ...result,
        ...info,
      };
    });

    return Promise.all(getResults).then((results) => {
      setResults(results);
    });
  }

  componentDidUpdate(newProps) {
    const { location } = this.props;
    const prevSearch = location.search;
    const newSearch = newProps.location.search;

    if (prevSearch !== newSearch) {
      this.componentDidMount();
    }
  }

  render() {
    const { results, search } = this.props;
    if (!search) return false;

    if (!results) return <Loader />;

    const message = `I found ${results.length} result${results.length > 1 ? 's' : ''} for "${search}"`;

    return (
      <div className="search container">
        <h1 className="title">
          {message}
        </h1>
        <ArticleList articles={results} />
      </div>
    );
  }
}

const mapStateToProps = (state, { location }) => ({
  results: state.search.results,
  get search() {
    const params = queryString.parse(location.search);
    return params.q;
  },
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
  },
});

SearchContainer.propTypes = {
  unsetAll: PropTypes.func,
  setResults: PropTypes.func,
  dispatchSearchBarAutoFocus: PropTypes.func,
  search: PropTypes.string,
  location: PropTypes.shape({ search: PropTypes.string }),
  results: PropTypes.arrayOf(PropTypes.object),
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchContainer));
