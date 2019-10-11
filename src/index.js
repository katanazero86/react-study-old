import React from 'react';
import ReactDOM from 'react-dom';

// router
import {BrowserRouter} from 'react-router-dom';

import './index.scss';

// redux
import {createStore}from 'redux'
import rootReducer from './store/index.js';
// **** Provider 불러오기 (store를 연동)
import { Provider } from 'react-redux';

// **** 스토어를 만들고 현재 값 확인해보기
const store = createStore(rootReducer);
console.log(store.getState());

// components
import App from './components/App.js';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
        <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
