/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";

import './index.css';
import { actionCreators } from "./store"

class MenuBar extends Component {

    render() {
    return (
        <div className="menu">
            <div  className="mCustomScrollBox">
                <div className="mCSB_container">
                    <ul>
                        <li>
                            <a className={this.props.focused ? 'menuBtn-focused': 'menuBtn'}
                               onMouseOver={this.props.handleMenuFocuse}
                               onMouseOut={this.props.handleMenuBlur}
                               href="#" >
                                <i className="iconfone"></i>
                                &nbsp;&nbsp;会员列表
                            </a>
                        </li>
                        <li>
                            <a className='menuBtn'
                               href="#" >
                                <i className="iconfone"></i>
                                &nbsp;&nbsp;消费项目
                            </a>
                        </li>
                        <li>
                            <a className='menuBtn'
                               href="#" >
                                <i className="iconfone"></i>
                                &nbsp;&nbsp;基础内容
                            </a>
                        </li>
                        <li>
                            <a className='menuBtn'
                               href="#" >
                                <i className="iconfone"></i>
                                &nbsp;&nbsp;财务管理
                            </a>
                        </li>
                        <li>
                            <a className='menuBtn'
                               href="#" >
                                <i className="iconfone"></i>
                                &nbsp;&nbsp;报表查看
                            </a>
                        </li>
                        <li>
                            <a className='menuBtn'
                               href="#" >
                                <i className="iconfone"></i>
                                &nbsp;&nbsp;导出Excel
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
}

const mapStateToProps = (state) => {
    return {
        focused: state.get("menuBar").get("focused")
    }
}

const mapDispathToProps =(dispatch) =>{
    return {
        handleMenuFocuse(){
            dispatch(actionCreators.handleMenuFocuse());
        },
        handleMenuBlur(){
            dispatch(actionCreators.handleMenuBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(MenuBar);