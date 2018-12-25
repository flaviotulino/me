import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../containers/SearchBarContainer';
import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import './NavBar.scss';

const NavBar = () => (
    <div>
        <nav className="navbar is-white is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt={'logo'}/>
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample" href="/">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item is-tab" to={'/articles'}>
                            Articles
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <SearchBarContainer/>
                        </div>
                    </div>
                </div>


            </div>
        </nav>
        <BreadcrumbContainer/>
    </div>

);


export default NavBar;
