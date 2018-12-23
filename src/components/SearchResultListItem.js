import React from 'react';
import { Link } from 'react-router-dom';
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
    result.text_matches.forEach(({matches}) => {
        matches.forEach(match => {
            const {text} = match;
            const pattern = new RegExp(text, 'ig');
            textContent = textContent.replace(pattern, `<b>${text}</b>`);
        });
    });

    return textContent;
};

const SearchResultListItem = ({result}) => (
    <div>
        <Link to={getLink(result)}>
            {result.title}
        </Link>
        <ReactSafeHtml html={getText(result)}/>
    </div>
);

export default SearchResultListItem;
