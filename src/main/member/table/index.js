/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';

class LayuiTable extends Component {
    render() {
        return (
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
        );
    }
}

export default LayuiTable;