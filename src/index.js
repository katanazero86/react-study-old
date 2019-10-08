import React from 'react';
import ReactDOM from 'react-dom';

// router
import {BrowserRouter} from 'react-router-dom';

import './index.scss';

// components
import App from './components/App.js';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
