/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';

import './index.css';

class FrameMenu extends Component {
    render() {
        return (
            <div className="frameMenu">
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

                {
                    //这块导航栏会有动画效果，我们后期再过来调试
                }
                <div className="menu">
                    <div  className="mCustomScrollBox">
                        <div className="mCSB_container">
                            <ul>
                                {
                                    //这里的 Aa将来都会使用小图标代替
                                    //并且还会有动画效果，后期再回来做
                                }
                                <li>
                                    <a href="#">
                                        <i className="iconfone">Aa</i>
                                        &nbsp;&nbsp;会员列表
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="iconfone">Aa</i>
                                        &nbsp;&nbsp;消费项目
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="iconfone">Aa</i>
                                        &nbsp;&nbsp;基础内容
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="iconfone">Aa</i>
                                        &nbsp;&nbsp;财务管理
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="iconfone">Aa</i>
                                        &nbsp;&nbsp;报表查看
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="iconfone">Aa</i>
                                        &nbsp;&nbsp;导出Excel
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrameMenu;