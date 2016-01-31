import React, { Component, PropTypes } from 'react';
import MenuRedes from './menuredes';
class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav className="pages-nav">
        		<div className="pages-nav__item"><a className="link link--page" href="#page-home">Home asd</a></div>
        		<div className="pages-nav__item"><a className="link link--page" href="#page-docu">Documentation</a></div>
        		<div className="pages-nav__item"><a className="link link--page" href="#page-manuals">Manuals</a></div>
        		<div className="pages-nav__item"><a className="link link--page" href="#page-software">Software</a></div>
        		<div className="pages-nav__item"><a className="link link--page" href="#page-custom">Customization &amp; Settings</a></div>
        		<div className="pages-nav__item"><a className="link link--page" href="#page-training">Training</a></div>
        		<MenuRedes />
        	</nav>
        );
    }
}

export default Menu;
