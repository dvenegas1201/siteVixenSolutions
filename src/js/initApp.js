import React, { Component } from 'react';
import { render } from 'react-dom';

class InitApp extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <h1>hola mundo!!! </h1>
        )
    }
}

render (
    <InitApp />,
    document.getElementById('root')
)
