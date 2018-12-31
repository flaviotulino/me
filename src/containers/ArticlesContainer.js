import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import BlogService from '../services/BlogService';
import ArticleList from '../components/ArticleList';
import Loader from '../components/Loader';
import { setArticle, setArticles, setCategory } from '../actions/blog';

class ArticlesContainer extends Component {
  async componentDidMount() {
    const {
      category, setCategory, setArticles, history,
    } = this.props;

    setCategory(category);

    try {
      const articles = await BlogService.getArticles(category);
      setArticles(articles);
    } catch (e) {
      history.push('/articles');
    }
  }

  componentDidUpdate() {
    const { unsetArticle } = this.props;
    unsetArticle();
  }

  render() {
    const { category, articles, setArticle } = this.props;

    if (!articles) return <Loader />;

    return (
      <div className="articles container">
        <ArticleList articles={articles} category={category} onSelect={setArticle} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  articles: state.blog.articles,
  category: ownProps.match.params.category,
  categories: state.blog.categories,
});

const mapDispatchToProps = dispatch => ({
  setCategory(category) {
    dispatch(setCategory(category));
  },
  setArticles(articles) {
    dispatch(setArticles(articles));
  },
  setArticle(article) {
    dispatch(setArticle(article));
  },
  unsetArticle() {
    dispatch(setArticle(null));
  },
});

ArticlesContainer.propTypes = {
  category: PropTypes.any,
  articles: PropTypes.arrayOf(PropTypes.any),
  setArticle: PropTypes.func,
  unsetArticle: PropTypes.func,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer));
