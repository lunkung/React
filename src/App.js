import React, { Component } from 'react';
import './index.css';

import Header from './header/index';
import FrameMenu from './frameMenu/index';
import Main from './main/index';

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
