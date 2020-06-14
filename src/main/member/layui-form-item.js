/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';

class LayuiFormItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
        };
    }

    render() {
        return (
            <div className="layui-form-item">
                <div className="layui-input-inline">
                    <input className="layui-input" placeholder="请输入手机号码后四位"/>
                </div>
                <button className="layui-btn">检索</button>
            </div>
        );
    }
}

export default LayuiFormItem;