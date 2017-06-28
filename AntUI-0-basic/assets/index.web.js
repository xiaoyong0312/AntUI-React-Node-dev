/**
 * @desc AntUIApp is my first AntUI example;
 * @author Create by xuyong on 2017/5/1
 */

import React, {Component} from 'react';
import ReactDom, {render} from 'react-dom';
import {StoreProvider} from 'iflux2';
import AppStore from './store';

//import { Button } from 'antd-mobile';
//import AntdMobile from 'antd-mobile';
import Button from 'antd-mobile/lib/button';

//debug: true, it will show good logs
//@StoreProvider(AppStore, {debug: true})
export default class AntUIApp extends React.Component {

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <a href="https://www.baidu.com" target="_blank">
                    This is AntUIApp.
                </a>

                <hr/>

                <Button onClick={()=>{
                    console.log(`AntUI click...`);
                    //Toast.info('AntUI click', 1);
                    //Toast.info('This is a toast tips !!!', 1);
                    alert('AntUI click');
                }}>AntUI</Button>
            </div>
        );
    }

}

render(<AntUIApp/>, document.getElementById('antUI'));
//ReactDom.render(<AntUIApp/>, document.getElementById('antUI'));
