import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BreadcrumbItem = ({
  path, onClick, active = false, visible = false, history, children,
}) => (
  history.location.pathname === path || visible
    ? (
      <li className={classNames({ 'is-active': history.location.pathname === path || active })}>
        <Link
          to={path}
          onClick={() => onClick()}
        >
          {children}
        </Link>
      </li>
    ) : false
);

BreadcrumbItem.propTypes = {
  path: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  visible: PropTypes.bool,
  history: PropTypes.any,
  children: PropTypes.any,
};

export default BreadcrumbItem;
