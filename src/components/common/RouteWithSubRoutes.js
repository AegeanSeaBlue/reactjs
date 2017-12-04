import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

export default class RouteWithSubRoutes extends React.Component {
    constructor(props ){
        super(props)
    }

    render() {
        return (
            <Route path={this.props.path} render={props => (
                <this.props.component {...this.props} routes={this.props.routes}/>
            )}/>
        );
    }
}