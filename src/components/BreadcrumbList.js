import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

import './BreadcrumnList.css';

const BreadcrumbList = ({category, unsetAll, article, unsetArticle, history}) => (
    <nav className="breadcrumb has-background-white has-succeeds-separator is-medium" aria-label="breadcrumbs">
        <div className="container">
            <ul>
                <BreadcrumbItem
                    path={'/articles'}
                    history={history}
                    visible={true}
                    onClick={unsetAll}>
                    Articles
                </BreadcrumbItem>

                <BreadcrumbItem
                    path={'/search'}
                    history={history}>
                    Search
                </BreadcrumbItem>

                <BreadcrumbItem
                    path={`/articles/${category}`}
                    onClick={unsetArticle}
                    history={history}
                    visible={!!category}>
                    {category}
                </BreadcrumbItem>

                <BreadcrumbItem
                    history={history}
                    path={`/articles/${category}/${article}`}
                    visible={!!category && !!article}>
                    {article}
                </BreadcrumbItem>
            </ul>
        </div>
    </nav>
);

export default BreadcrumbList;
