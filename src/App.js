import React, { Component } from 'react';
import './index.css';

import Header from './header';
import FrameMenu from './frameMenu';
import Main from './main';

class App extends Component {
    render() {
        return (
            <div>
                {
                    //header部分
                }
                <Header/>

                {
                    //左侧导航栏
                }
                <FrameMenu/>

                {
                    //右侧详细内容
                }
                <Main/>

            </div>
        );
    }
}

export default App;
