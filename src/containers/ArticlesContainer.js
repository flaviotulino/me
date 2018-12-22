import React, {Component} from 'react';
import {BlogService} from "../lib/BlogService";
import ArticleList from "../components/ArticleList";
import Loader from "../components/Loader";

export default class ArticlesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: null
    }
  }

  async componentDidMount() {
    const {category} = this.props.match.params;

    const articles = await BlogService.getArticles(category);
    this.setState({articles});
  }

  render() {
    if (!this.state.articles) return <Loader />;

    const {category} = this.props.match.params;

    return (
      <div>
        <ArticleList articles={this.state.articles} category={category}/>
      </div>
    )
  }
}
