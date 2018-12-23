import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const BreadcrumbItem = ({path, onClick, active = true, visible = true, children}) => (
    visible ?
    <li className={classNames({'is-active': active})}>
        <Link to={path}
              onClick={() => onClick()}>
            {children}
        </Link>
    </li> : false
);

export default BreadcrumbItem;
