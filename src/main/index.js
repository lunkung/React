/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';

import './index.css';

import FrameTop from './common/frameTop';
import Title from './common/title';
import LayuiFormItem from './member/layui-form-item';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <FrameTop/>

                <div className="frameMain">
                    <Title/>

                    <div className="con">
                        <div className="cBody">
                            <div className="mCustomScrollBox">

                                <div className="mCSB_container">
                                    <LayuiFormItem/>
                                    

                                    <table className="layui-table">
                                        <thead>
                                            <tr>
                                                <th>姓名</th>
                                                <th>手机号</th>
                                                <th>消费项目</th>
                                                <th>消费时间</th>
                                                <th>剩余免费次数</th>
                                                <th>剩余金额/元</th>
                                                <th>操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>张三</td>
                                                <td>18700947045</td>
                                                <td>普通剪发</td>
                                                <td>2020-06-14 14:35</td>
                                                <td>1</td>
                                                <td>150</td>
                                                <td>
                                                    <button className="layui-btn layui-btn-xs">修改</button>
                                                    <button className="layui-btn layui-btn-xs">基本信息</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>


                                    {
                                        //分页样式
                                    }
                                    <div>
                                        <div className = "layui-box layui-laypage layui-laypage-default">
                                            <span className="layui-laypage-count">共 100 条</span>
                                            <a href="javascript:;" className="layui-laypage-prev layui-disabled">
                                                上一页
                                            </a>
                                            <span className="layui-laypage-curr">
                                                <em className="layui-laypage-em"></em>
                                                <em>1</em>
                                            </span>
                                            <a href="javascript:;">2</a>
                                            <a href="javascript:;">3</a>
                                            <a href="javascript:;">4</a>
                                            <a href="javascript:;">5</a>
                                            <span className="layui-laypage-spr">...</span>
                                            <a href="javascript:;" className="layui-laypage-last" title="尾页">10</a>
                                            <a href="javascript:;" className="layui-laypage-next">下一页</a>
                                            <span className="layui-laypage-limits">
                                                <select>
                                                    <option value="10" selected>10 条/页</option>
                                                    <option value="20">20 条/页</option>
                                                    <option value="30">30 条/页</option>
                                                    <option value="40">40 条/页</option>
                                                    <option value="50">50 条/页</option>
                                                </select>
                                            </span>
                                            <span className="layui-laypage-skip">
                                                到第
                                                <input className="layui-input"  type="text" min="1" value="1"/>
                                                页
                                                <button type="button" className="layui-laypage-btn">确定</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;