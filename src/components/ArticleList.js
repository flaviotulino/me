import React from 'react';
import ArticleListItem from "./ArticleListItem";

const ArticleList = ({articles, category, onSelect}) => (
  <div className="article-list columns">
    {
      articles.map(article => {
          return (
            <div key={article.sha} className="column is-one-third">
              <ArticleListItem article={article} category={category} onSelect={onSelect}/>
            </div>
          )
        }
      )
    }
  </div>
);

export default ArticleList;
