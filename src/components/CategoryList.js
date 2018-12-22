import React from 'react';
import CategoryListItem from "./CategoryListItem";

const CategoryList = ({categories}) => (
  <div className="categories">
    {
      categories.map(category => (
          <div key={category.sha}>
            <CategoryListItem category={category} />
          </div>
        )
      )
    }
  </div>
);

export default CategoryList;
