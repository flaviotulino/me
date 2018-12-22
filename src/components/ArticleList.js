import React from 'react';
import ArticleListItem from "./ArticleListItem";

const ArticleList = ({articles, category}) => (
  <div className="articles">
    {
      articles.map(article => {
          return (
            <div key={article.sha}>
              <ArticleListItem article={article} category={category}/>
            </div>
          )
        }
      )
    }
  </div>
);

export default ArticleList;
