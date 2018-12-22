import React from 'react';
import ArticleListItem from "./ArticleListItem";

const ArticleList = ({articles, category, onSelect}) => (
  <div className="articles">
    {
      articles.map(article => {
          return (
            <div key={article.sha}>
              <ArticleListItem article={article} category={category} onSelect={onSelect}/>
            </div>
          )
        }
      )
    }
  </div>
);

export default ArticleList;
