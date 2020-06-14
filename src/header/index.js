/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';

import './index.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="center">
                    <ul>
                        <li className="title">
                            <a href="#" className="logo">
                                {//这里是logo的位置, 后期再回来调样式
                                    // <img src="http://www.bootstrapmb.com/content/images/preview/logo_light.png"/>
                                }
                            </a>
                        </li>
                        <li className="logoTop">
                            <a href="#">杀马特洗剪吹后台管理</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;