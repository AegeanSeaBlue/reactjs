import React from 'react'
import {render} from 'react-dom'
import MainView from './views/MainView'
import { AppContainer } from 'react-hot-loader';
import createHistory  from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducers'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
const history = createHistory();
const store = createStore(reducer)
const renderApp = (Component) => {
    render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <Component />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
};

renderApp(MainView);

// 模块热替换的 API
if (module.hot) {
    module.hot.accept('./views/MainView', () => {
        renderApp(MainView);
    });
}