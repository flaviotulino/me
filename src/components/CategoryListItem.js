import React from "react";
import {Link} from "react-router-dom";

const CategoryListItem = ({category, onSelect}) => (
  <div className="category">
    <Link to={`/articles/${category.name}`} onClick={() => onSelect(category.name)}>
      {category.name}
    </Link>
  </div>
);

export default CategoryListItem;
