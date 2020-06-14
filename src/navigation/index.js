/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';

import './index.css';
import Logo from "./logo"
import MenuBar from "./menuBar"

class Navigation extends Component {

    render() {
        return (
            <div className="frameMenu">

                <Logo/>
                <MenuBar/>

            </div>
        );
    }
}

export default Navigation;