require('./index.less');
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';
import reducer from './reducers';
import App from './components/App';

const store = createStore(reducer,
    {}, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

const jsx = (
    <Provider store={store}>
      <App />
    </Provider>
);

const rootElement = document.getElementById('root');

render(jsx, rootElement);
