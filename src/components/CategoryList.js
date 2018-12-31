import React from 'react';
import PropTypes from 'prop-types';
import CategoryListItem from './CategoryListItem';

const CategoryList = ({ categories, onSelect }) => (
  <div className="categories">
    {
      categories.map(category => (
        <div key={category.sha}>
          <CategoryListItem category={category} onSelect={onSelect} />
        </div>
      ))
    }
  </div>
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.any),
  onSelect: PropTypes.func,
};

export default CategoryList;
