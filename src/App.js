import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import CategoriesContainer from "./containers/CategoriesContainer";
import ArticlesContainer from "./containers/ArticlesContainer";
import ArticleContainer from "./containers/ArticleContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Link to={'/articles'}>Articles</Link>

            <Route exact path={'/articles'} component={CategoriesContainer}/>
            <Route exact path={'/articles/:category'} component={ArticlesContainer}/>
            <Route exact path={'/articles/:category/:article'} component={ArticleContainer}/>

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
