import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbItem from './BreadcrumbItem';
import './BreadcrumnList.scss';

const BreadcrumbList = ({
  category, unsetAll, article, unsetArticle, history, currentArticle,
}) => (
  <nav className="navbar is-white is-fixed-top navbar-sub" role="navigation" aria-label="main breadcrumb">
    <div className="container">
      <nav className="breadcrumb has-background-white has-succeeds-separator is-medium" aria-label="breadcrumbs">

        <ul>
          <BreadcrumbItem
            path="/articles"
            history={history}
            visible
            onClick={unsetAll}
          >
            {'Articles '}
          </BreadcrumbItem>

          <BreadcrumbItem
            path="/articles/search"
            history={history}
          >
            {'Search'}
          </BreadcrumbItem>

          <BreadcrumbItem
            path={`/articles/${category}`}
            onClick={unsetArticle}
            history={history}
            visible={!!category}
          >
            {category}
          </BreadcrumbItem>

          <BreadcrumbItem
            history={history}
            path={`/articles/${category}/${article}`}
            visible={!!currentArticle && !!category && !!article}
          >
            {currentArticle ? currentArticle.title : null}
          </BreadcrumbItem>
        </ul>
      </nav>
    </div>
  </nav>
);

BreadcrumbList.propTypes = {
  category: PropTypes.any,
  unsetAll: PropTypes.func,
  article: PropTypes.any,
  unsetArticle: PropTypes.func,
  history: PropTypes.any,
  currentArticle: PropTypes.any,
};

export default BreadcrumbList;
