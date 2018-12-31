import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setArticle, setCategory } from '../actions/blog';
import BreadcrumbList from '../components/BreadcrumbList';

const mapStateToProps = state => ({
  category: state.blog.category,
  article: state.blog.article,
  currentArticle: state.blog.currentArticle,
});

const mapDispatchToProps = dispatch => ({
  unsetAll() {
    dispatch(setCategory(null));
    dispatch(setArticle(null));
  },
  unsetArticle() {
    dispatch(setArticle(null));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BreadcrumbList));
