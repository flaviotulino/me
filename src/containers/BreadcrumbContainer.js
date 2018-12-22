import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {setArticle, setCategory} from "../actions/blog";
import classNames from 'classnames';


const BreadcrumbContainer = ({category, unsetAll, article, unsetArticle}) => (
  <div>
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li className={classNames({
          'is-active': !category
        })}>
          <Link to={'/articles'}
                onClick={() => unsetAll()}>
            Articles
          </Link>
        </li>
        {
          category &&
          <li className={classNames({
            'is-active': !article
          })}>
            <Link to={`/articles/${category}`}
                  onClick={() => unsetArticle()}>
              {category}
            </Link>
          </li>
        }
        {
          category && article &&
          <li className="is-active">
            <Link to={`/articles/${category}/${article}`}>
              {article}
            </Link>
          </li>
        }
      </ul>
    </nav>
  </div>
);

const mapStateToProps = state => ({
  category: state.blog.category,
  article: state.blog.article
});

const mapDispatchToProps = dispatch => ({
  unsetAll() {
    dispatch(setCategory(null));
    dispatch(setArticle(null));
  },
  unsetArticle() {
    dispatch(setArticle(null));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbContainer);
