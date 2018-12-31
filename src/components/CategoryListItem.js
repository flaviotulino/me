import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryListItem = ({ category, onSelect }) => (
  <div className="category">
    <Link to={`/articles/${category.name}`} onClick={() => onSelect(category.name)}>
      {category.name}
    </Link>
  </div>
);

CategoryListItem.propTypes = {
  category: PropTypes.any,
  onSelect: PropTypes.func,
};

export default CategoryListItem;
