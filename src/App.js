import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoriesContainer from './containers/CategoriesContainer';
import ArticlesContainer from './containers/ArticlesContainer';
import ArticleContainer from './containers/ArticleContainer';
import BlogService from './services/BlogService';
import { setCategories } from './actions/blog';
import Loader from './components/Loader';
import SearchContainer from './containers/SearchContainer';
import NavBarContainer from './containers/NavBarContainer';


import './App.scss';


class App extends Component {
  async componentDidMount() {
    const { setCategories } = this.props;
    const categories = await BlogService.getCategories();
    setCategories(categories);
  }

  render() {
    const { categories } = this.props;
    if (!categories) return <Loader />;

    return (
      <div>
        <NavBarContainer />
        <div className="app">
          <div>

            <Route exact path="/articles" component={CategoriesContainer} />
            <Switch>
              <Route exact path="/articles/search" component={SearchContainer} />
              <Route exact path="/articles/:category" component={ArticlesContainer} />
            </Switch>
            <Route exact path="/articles/:category/:article" component={ArticleContainer} />

          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  categories: state.blog.categories,
});

const mapDispatchToProps = dispatch => ({
  setCategories(categories) {
    dispatch(setCategories(categories));
  },
});


App.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  setCategories: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
