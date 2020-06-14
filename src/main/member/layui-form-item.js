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
        this.handleBtnFocuse = this.handleBtnFocuse.bind(this);
        this.handleBtnBlur = this.handleBtnBlur.bind(this);
    }

    render() {
        return (
            <div className="layui-form-item">
                <div className="layui-input-inline">
                    <input className="layui-input" placeholder="请输入手机号码后四位"/>
                </div>
                <button className={this.state.focused ? 'layui-btn-focused': 'layui-btn'}
                        onMouseOver={this.handleBtnFocuse}
                        onMouseOut={this.handleBtnBlur}
                >
                    检索
                </button>
            </div>
        );
    }

    handleBtnFocuse(){
        this.setState({
            focused:true
        });
    }
    handleBtnBlur(){
        this.setState({
            focused:false
        });
    }

}

export default LayuiFormItem;