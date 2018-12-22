import React from 'react';
import CategoryListItem from "./CategoryListItem";

const CategoryList = ({categories, onSelect}) => (
  <div className="categories">
    {
      categories.map(category => (
          <div key={category.sha}>
            <CategoryListItem category={category} onSelect={onSelect} />
          </div>
        )
      )
    }
  </div>
);

export default CategoryList;
