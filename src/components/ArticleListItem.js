import React from "react";
import {Link} from "react-router-dom";

const ArticleListItem = ({article, category, onSelect}) => (
  <div className="article">
    <Link to={`/articles/${category}/${article.name}`} onClick={() => onSelect(article.name)}>
      {article.title}
    </Link>
  </div>
);

export default ArticleListItem;
