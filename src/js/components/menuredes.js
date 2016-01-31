import React, { Component, PropTypes } from 'react';

class MenuRedes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
    		<div className="pages-nav__item pages-nav__item--social">
    			<a className="link link--social link--faded" href="#"><i className="fa fa-twitter"></i><span className="text-hidden">Twitter</span></a>
    			<a className="link link--social link--faded" href="#"><i className="fa fa-linkedin"></i><span className="text-hidden">LinkedIn</span></a>
    			<a className="link link--social link--faded" href="#"><i className="fa fa-facebook"></i><span className="text-hidden">Facebook</span></a>
    			<a className="link link--social link--faded" href="#"><i className="fa fa-youtube-play"></i><span className="text-hidden">YouTube</span></a>
    		</div>
        );
    }
}

export default MenuRedes;
