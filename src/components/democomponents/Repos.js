import React from 'react'
import { NavLink } from 'react-router-dom'
import routesConfig from '../../routes'
import RouteWithSubRoutes from '../common/RouteWithSubRoutes'
export default class Repos extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h5 style={{padding:"20px"}}>欢迎来到Repos页面</h5>
                <ul style={{padding:"20px"}} role="nav" >
                    <li><NavLink to="/repos/repo" activeClassName="active">链接到Repo页面</NavLink></li>
                </ul>
                {this.props.routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </div>
        );
    }
}




