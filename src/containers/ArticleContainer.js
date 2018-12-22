import React, {Component} from 'react';
import {markdown} from 'markdown';
import {BlogService} from "../lib/BlogService";
import ReactSafeHtml from 'react-safe-html';
import Loader from "../components/Loader";

export default class ArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null
    }
  }

  componentDidMount() {
    const {category, article} = this.props.match.params;
    BlogService
      .getArticle({category, article})
      .then(article => {
        this.setState({article});
      })
  }

  render() {
    if (!this.state.article) return <Loader />;

    const content = markdown.toHTML(this.state.article.content);
    return (
      <div className="article">
        <h1>{this.state.article.title}</h1>
        <ReactSafeHtml html={content}/>
      </div>
    )
  }
}
