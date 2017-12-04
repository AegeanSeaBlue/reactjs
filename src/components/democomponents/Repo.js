import React from 'react'

export default class Repo extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div style={{border:'1px solid #aaa',display:"block",height:"150px",backgroundColor:"#ccc"}}>
                <span>欢迎来到Repo页面...</span>
                <span>用户名：{this.props.params||'空'}</span>
                <div>测试图片：base64</div>
                <div className="test" style={{height:'50px',width:'50px'}}></div>
                <div>测试图片：路劲</div>
                <div className="test1" style={{height:'50px',width:'50px'}}></div>
            </div>
        );
    }
}