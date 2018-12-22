import React, {Component} from 'react';
import {BlogService} from "../lib/BlogService";
import CategoryList from "../components/CategoryList";
import Loader from "../components/Loader";

export default class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null
    }
  }

  componentDidMount() {
    BlogService.getCategories().then(categories => {
      this.setState({categories});
    });
  }

  render() {
    if (!this.state.categories) return <Loader />;

    return (
      <div>
        <CategoryList categories={this.state.categories} />
      </div>
    )
  }
}
