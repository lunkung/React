/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';

import './index.css';

class Logo extends Component {

    render() {
        return (
            <div className="logo">
                {
                    //这里可以放个logo,后期再过来调试
                    //<img src="http://v.bootstrapmb.com/2019/4/rsts4529/images/logo.png"/>
                }
                <img src="http://v.bootstrapmb.com/2019/4/rsts4529/images/logo.png"/>
                <div className="logoText">
                    <h1>欢迎您：廉毛</h1>
                    <p>Welcome: Msr Lian</p>
                </div>
            </div>
        );
    }
}

export default Logo;