/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";

class LayuiFormItem extends Component {
    render() {
        return (
            <div className="layui-form-item">
                <div className="layui-input-inline">
                    <input className="layui-input" placeholder="请输入手机号码后四位"/>
                </div>
                <button className={this.props.focused ? 'layui-btn-focused': 'layui-btn'}
                        onMouseOver={this.props.handleBtnFocuse}
                        onMouseOut={this.props.handleBtnBlur}
                >
                    检索
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.searchCriteria.focused
    }
}

const mapDispathToProps =(dispatch) =>{
    return {
        handleBtnFocuse()   {
            const action = {
                type: "handleBtnFocuse"
            };
            dispatch(action);
        },
        handleBtnBlur(){
            const action = {
                type: "handleBtnBlur"
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(LayuiFormItem);