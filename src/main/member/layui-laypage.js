/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';

class LayuiPage extends Component {
    render() {
        return (
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
        );
    }
}

export default LayuiPage;