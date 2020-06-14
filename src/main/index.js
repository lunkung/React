/**
 * Created by lunk on 2020/6/14.
 */
import React, { Component } from 'react';

import './index.css';

import FrameTop from './common/frameTop';
import Title from './common/title';

import LayuiFormItem from './member/searchCriteria/layui-form-item';
import LayuiTable from './member/table/layui-table';
import LayuiPage from './member/pagination/layui-laypage';

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
                                    <LayuiTable/>
                                    <LayuiPage/>
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