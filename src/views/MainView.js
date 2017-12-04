import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { matchPath ,withRouter } from 'react-router'
import routesConfig from '../routes'
import RouteWithSubRoutes from '../components/common/RouteWithSubRoutes'
// import {ButtonGroup,Row,Col,Button} from 'epm-ui'
import '../assets/App.scss'

 class MainView extends React.Component {
    constructor(props){
        super(props)
    }

    handleClick(link){
        this.props.history.push(link)
    }

    render() {
        return (
                    <div>
                        <h5 style={{padding:"20px"}} ><span className="active">React-demo</span></h5>
                        <div>测试图片：base64</div>
                        <div className="test" style={{height:'50px',width:'50px'}}></div>
                        <div>测试图片：路劲</div>
                        <div className="test1" style={{height:'50px',width:'50px'}}></div>
                        <Link to="/about">about-->页面</Link><br/>
                        <Link to="/repos">repos-->页面</Link><br/>
                        <Link to="/count">count-->页面</Link>
                        <div>
                            <div size={2} style={{marginLeft:"20px"}}>
                                <div>
                                    <button onClick={() => {this.handleClick("/about")}}>about</button>
                                    <button onClick={() => {this.handleClick("/repos")}}>repos</button>
                                    <button onClick={() => {this.handleClick("/count")}}>count</button>
                                </div>
                            </div>
                            <div size={9}>
                                <div style={{backgroundColor:'#ddd',height:'300px'}}>
                                   {routesConfig.map((route, i) => (
                                        <RouteWithSubRoutes key={i} {...route}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}
export default withRouter(MainView)
