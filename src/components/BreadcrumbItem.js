import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const BreadcrumbItem = ({path, onClick, active = false, visible = false, history, children}) => (
    history.location.pathname === path || visible ?
    <li className={classNames({'is-active': history.location.pathname === path || active})}>
        <Link to={path}
              onClick={() => onClick()}>
            {children}
        </Link>
    </li> : false
);

export default BreadcrumbItem;
