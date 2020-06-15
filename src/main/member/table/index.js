/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';

import { connect } from "react-redux";
import { actionCreators } from "./store"

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
                    {
                        this.props.list.map((item,index) => {
                            return <tr key={index}>
                                <td>{item.get("name")}</td>
                                <td>{item.get("phoneNumber")}</td>
                                <td>{item.get("consumerItem")}</td>
                                <td>{item.get("consumerTime")}</td>
                                <td>{item.get("remainingTimes")}</td>
                                <td>{item.get("remainingAmount")}</td>
                                <td>
                                    <button className="layui-btn layui-btn-xs">修改</button>
                                    <button className="layui-btn layui-btn-xs">基本信息</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        );
    }

    componentDidMount(){
        this.props.handleBtnClick();
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(["member","list"])
    }
}

const mapDispathToProps =(dispatch) =>{
    return {
        handleBtnClick(){
            dispatch(actionCreators.getMemberList());
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(LayuiTable);