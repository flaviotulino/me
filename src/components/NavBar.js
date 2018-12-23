import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../containers/SearchBarContainer';

const NavBar = () => (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to={'/articles'}>
                        Articles
                    </Link>

                    <div className="navbar-item">
                        <SearchBarContainer />
                    </div>
                </div>
            </div>
        </div>
    </nav>
);


export default NavBar;
