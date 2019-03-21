import React from 'react';
import Logo from '../static/images/logo.png';
import {Input} from 'antd';
import axios from 'axios';

const Search = Input.Search; // antd的按钮

// logo和搜索框组件
export default class SearchBox extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="search-box">
        <a href="https://www.zhihu.com/topic/19604314/intro" target="_blank">
            <img id="logo" src={Logo} alt="工大导航" title="团结勤奋求是创新" />
        </a>
        <Search className="input-box" size="large" enterButton placeholder="百度一下" onSearch={value => window.open("https://www.baidu.com/s?wd="+value)} autoFocus />
        </div>;
    }
}
// axios.defaults.baseURL = "https://hitokoto.cn";
console.log(axios.get("https://hitokoto.cn?c=g").then(res=>{return res.json()}).then(data=>{console.log(data.hitokoto)}).catch(error=>{console.log(error)}));