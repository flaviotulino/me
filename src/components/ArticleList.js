import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({ articles, category, onSelect }) => (
  <div className="article-list columns">
    {
      articles.map(article => (
        <div key={article.sha} className="column is-one-third">
          <ArticleListItem article={article} category={category} onSelect={onSelect} />
        </div>
      ))
    }
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  category: PropTypes.any,
  onSelect: PropTypes.func,
};

export default ArticleList;
