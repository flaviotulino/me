import { connect } from "react-redux";
import { setArticle, setCategory } from "../actions/blog";
import BreadcrumbList from '../components/BreadcrumbList';
import { withRouter } from 'react-router-dom';

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BreadcrumbList));
