import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

const BreadcrumbList = ({category, unsetAll, article, unsetArticle, history}) => (
    <div>
        <nav className="breadcrumb" aria-label="breadcrumbs">
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
        </nav>
    </div>
);

export default BreadcrumbList;
