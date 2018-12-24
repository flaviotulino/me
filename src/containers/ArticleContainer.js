import React, { Component } from 'react';
import { markdown } from 'markdown';
import { BlogService } from "../services/BlogService";
import ReactSafeHtml from 'react-safe-html';
import Loader from "../components/Loader";
import { connect } from "react-redux";
import { setArticle, setCategory, setCurrentArticle } from "../actions/blog";
import CoverImage from "../components/CoverImage";
import { Redirect, withRouter } from "react-router-dom";

class ArticleContainer extends Component {

    async componentDidMount() {
        const {category, setCategory, article, setArticle, setCurrentArticle, history} = this.props;
        setCategory(category);
        setArticle(article);

        try {
            const currentArticle = await BlogService.getArticle({category, article});
            console.log(currentArticle);
            setCurrentArticle(currentArticle);
        } catch (e) {
            history.push(`/articles/${category}`)
        }

    }

    render() {
        const {currentArticle} = this.props;

        if (!currentArticle) return <Loader/>;

        const content = markdown.toHTML(currentArticle.content);
        return (
            <div className="article">
                <CoverImage image={currentArticle.cover.url} alt={currentArticle.cover.alt}/>

                <div className="container">
                    <h1 className="title">{currentArticle.title}</h1>
                    <ReactSafeHtml html={content}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    categories: state.blog.categories,
    category: ownProps.match.params.category,
    article: ownProps.match.params.article,
    currentArticle: state.blog.currentArticle
});

const mapDispatchToProps = dispatch => ({
    setCategory(category) {
        dispatch(setCategory(category));
    },
    setArticle(article) {
        dispatch(setArticle(article));
    },
    setCurrentArticle(currentArticle) {
        dispatch(setCurrentArticle(currentArticle));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleContainer));
