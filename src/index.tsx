import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import storeHelper from './storeHelper';

ReactDOM.render(
    <Provider store={storeHelper}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
