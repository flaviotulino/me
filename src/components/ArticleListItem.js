import React from "react";
import { Link } from "react-router-dom";
import { markdown } from 'markdown';
import ReactSafeHtml from 'react-safe-html';

const getLink = (result) => {
    const [category, article] = result.path.split('/');
    return `/articles/${category}/${article}`;
};

const getText = result => {
    const contentHTML = markdown.toHTML(result.content);
    const fakeElement = document.createElement('div');
    fakeElement.innerHTML = contentHTML;

    let textContent = fakeElement.textContent;

    if (result.text_matches) {
        result.text_matches.forEach(({matches}) => {
            matches.forEach(match => {
                const {text} = match;
                const pattern = new RegExp(text, 'ig');
                textContent = textContent.replace(pattern, `<b>${text}</b>`);
            });
        });
    }

    return textContent;
};
const ArticleListItem = ({article}) => (
    <div className="article-list__item">
        <Link to={getLink(article)}>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={article.cover.url}/>
                    </figure>
                </div>
                <div className="card-content">
                    <h1 className="title">{article.title}</h1>
                    <ReactSafeHtml html={getText(article)}/>
                </div>
            </div>
        </Link>
    </div>
);

export default ArticleListItem;
