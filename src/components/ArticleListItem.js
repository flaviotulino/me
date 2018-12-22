import React from "react";
import {Link} from "react-router-dom";

// const normaliseName = name => {
//   console.log(name);
//   return name.substr(0, name.lastIndexOf('.md'))
// };

const ArticleListItem = ({article, category}) => (
  <div className="article">
    <Link to={`/articles/${category}/${article.name}`}>
    {article.title}
  </Link>
</div>
);

export default ArticleListItem;
