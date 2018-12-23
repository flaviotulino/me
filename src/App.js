import React, { Component } from 'react';
import {Route} from "react-router-dom";
import CategoriesContainer from "./containers/CategoriesContainer";
import ArticlesContainer from "./containers/ArticlesContainer";
import ArticleContainer from "./containers/ArticleContainer";
import BreadcrumbContainer from "./containers/BreadcrumbContainer";
import {connect} from "react-redux";
import {BlogService} from "./services/BlogService";
import {setCategories} from "./actions/blog";
import Loader from "./components/Loader";

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    BlogService.getCategories().then(categories => {
      dispatch(setCategories(categories));
    });
  }

  render() {
    const {categories} = this.props;
    if (!categories) return <Loader />;

    return (
      <div className="app">
        <div>
          <BreadcrumbContainer />

          <Route exact path={'/articles'} component={CategoriesContainer}/>
          <Route exact path={'/articles/:category'} component={ArticlesContainer}/>
          <Route exact path={'/articles/:category/:article'} component={ArticleContainer}/>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.blog.categories
});


export default connect(mapStateToProps)(App);
