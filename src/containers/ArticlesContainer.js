import React, {Component} from 'react';
import {BlogService} from "../services/BlogService";
import ArticleList from "../components/ArticleList";
import Loader from "../components/Loader";
import {connect} from "react-redux";
import {setArticle, setArticles, setCategory} from "../actions/blog";
import {Redirect} from "react-router-dom";

class ArticlesContainer extends Component {
  async componentDidMount() {
    const {category, setCategory, setArticles} = this.props;
    setCategory(category);

    const articles = await BlogService.getArticles(category);
    setArticles(articles);
  }

  render() {
    const {category, articles, setArticle, categories} = this.props;

    if (!categories.find(cat => cat.name === category)) {
      return <Redirect to={'/articles'} />;
    }

    if (!articles) return <Loader />;

    return (
      <div>
        <ArticleList articles={articles} category={category} onSelect={setArticle}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  articles: state.blog.articles,
  category: ownProps.match.params.category,
  categories: state.blog.categories
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
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ArticlesContainer);
