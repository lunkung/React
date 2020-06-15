/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionCreators } from  "./store"

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
        focused: state.get("searchCriteria").get("focused")
    }
}

const mapDispathToProps =(dispatch) =>{
    return {
        handleBtnFocuse(){
            dispatch(actionCreators.handleBtnFocuse());
        },
        handleBtnBlur(){
            dispatch(actionCreators.handleBtnBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(LayuiFormItem);