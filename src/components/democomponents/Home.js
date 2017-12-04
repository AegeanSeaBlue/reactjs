import React from 'react'

export default class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div><span style={{color:'red'}}>欢迎来到首页!-----我是默认路由</span></div>
        );
    }
}