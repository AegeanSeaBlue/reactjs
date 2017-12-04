import React from 'react'
import Bundle from './Bundle'
//方式一   react-router官方做法
import About_ from 'bundle-loader?lazy!../components/democomponents/About'
import Repos_ from 'bundle-loader?lazy!../components/democomponents/Repos'
import Repo_ from 'bundle-loader?lazy!../components/democomponents/Repo'
import Count_ from 'bundle-loader?lazy!../components/democomponents/Count'

const About = (props) => (
    <Bundle load={About_}>
        {(Container) => <Container {...props}/>}
    </Bundle>
)

const Repos = (props) => (
    <Bundle load={Repos_}>
        {(Container) => <Container {...props}/>}
    </Bundle>
)

const Repo = (props) => (
    <Bundle load={Repo_}>
        {(Container) => <Container {...props}/>}
    </Bundle>
)


const Count = (props) => (
    <Bundle load={Count_}>
        {(Container) => <Container {...props}/>}
    </Bundle>
)

export default [
    {   path: '/about',
        component: About
    },
    {   path: '/repos',
        component: Repos,
        routes: [
            {   path: '/repos/repo',
                component: Repo
            }
        ]
    },{
        path: '/count',
        component: Count,
    }
]