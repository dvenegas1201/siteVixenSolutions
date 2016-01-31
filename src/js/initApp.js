import React, { Component } from 'react';
import { render } from 'react-dom';
import Menu from './components/menu';
import Page from './components/page';

class InitApp extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Menu />
                <Page />
                <button className="menu-button"><span>Menu</span></button>
            </div>
        )
    }
}

render (
    <InitApp />,
    document.getElementById('root')
)
