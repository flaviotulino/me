import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryList from '../components/CategoryList';
import Loader from '../components/Loader';
import { setCategory } from '../actions/blog';

class CategoriesContainer extends Component {
  componentDidMount() {
    const { unsetCategory } = this.props;
    unsetCategory();
  }

  render() {
    const { categories, setCategory } = this.props;

    if (!categories) return <Loader />;

    return (
      <div className="categories container">
        <CategoryList categories={categories} onSelect={setCategory} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.blog.categories,
});

const mapDispatchToProps = dispatch => ({
  setCategory(category) {
    dispatch(setCategory(category));
  },
  unsetCategory() {
    dispatch(setCategory(null));
  },
});

CategoriesContainer.propTypes = {
  unsetCategory: PropTypes.func,
  setCategory: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.any),
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
