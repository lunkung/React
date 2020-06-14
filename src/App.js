import React from 'react';
import './index.css';

import Header from './header/index';

function App() {
  return (
    <div>
        {
            //这里是header的位置
        }
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

        {
            //左侧导航栏
        }
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

        {
            //右侧详细内容
        }
        <div className="main">
            这里是右侧详细内容
        </div>
    </div>
  );
}

export default App;
