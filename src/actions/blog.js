export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_CATEGORY = 'SET_CATEGORY';

export const SET_ARTICLES = 'SET_ARTICLES';
export const SET_ARTICLE = 'SET_ARTICLE';
export const SET_CURRENT_ARTICLE = 'SET_CURRENT_ARTICLE';

export const setCategories = categories => ({
  type: SET_CATEGORIES,
  categories
});

export const setCategory = category => ({
  type: SET_CATEGORY,
  category
});

export const setArticles = articles => ({
  type: SET_ARTICLES,
  articles
});

export const setArticle = article => ({
  type: SET_ARTICLE,
  article
});

export const setCurrentArticle = currentArticle => ({
  type: SET_CURRENT_ARTICLE,
  currentArticle
});
