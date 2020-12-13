import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './app/App';
import ApiClient from './api/apiClient';
import store from './store/configureStore';

new ApiClient('a514a571ca8483723aa3c23e939e8e24');

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
