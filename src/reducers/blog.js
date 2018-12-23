import {SET_ARTICLE, SET_ARTICLES, SET_CATEGORIES, SET_CATEGORY, SET_CURRENT_ARTICLE} from "../actions/blog";

const blog = (state = {}, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      const {categories} = action;
      return {
        ...state,
        categories
      };

    case SET_CATEGORY:
      const {category} = action;
      return {
        ...state,
        category
      };

    case SET_ARTICLES:
      const {articles} = action;
      return {
        ...state,
        articles
      };

    case SET_ARTICLE:
      const {article} = action;
      return {
        ...state,
        article
      };

    case SET_CURRENT_ARTICLE:
      const {currentArticle} = action;
      return {
        ...state,
        currentArticle
      };

    default:
      return state;
  }
};

export default blog;
