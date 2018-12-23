import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

const BreadcrumbList = ({category, unsetAll, article, unsetArticle}) => (
    <div>
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <BreadcrumbItem
                    path={'/articles'}
                    active={!category}
                    onClick={unsetAll}>
                    Articles
                </BreadcrumbItem>

                <BreadcrumbItem
                    path={`/articles/${category}`}
                    onClick={unsetArticle}
                    active={!article}
                    visible={!!category}>
                    {category}
                </BreadcrumbItem>

                <BreadcrumbItem
                    path={`/articles/${category}/${article}`}
                    visible={!!category && !!article}>
                    {article}
                </BreadcrumbItem>
            </ul>
        </nav>
    </div>
);

export default BreadcrumbList;
