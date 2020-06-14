/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';

import './index.css';

class FrameTop extends Component {
    render() {
        return (
            <div className="frameTop">
                <img className="jt" src="http://v.bootstrapmb.com/2019/4/rsts4529/images/top_jt.png"/>
                <div className="topMenu">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="iconfont"></i>
                                &nbsp;管理员
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="iconfont"></i>
                                &nbsp;修改密码
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="iconfont"></i>
                                &nbsp;注销
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FrameTop;