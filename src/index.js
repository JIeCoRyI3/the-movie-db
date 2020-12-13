import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import ApiClient from './api/apiClient';

new ApiClient('a514a571ca8483723aa3c23e939e8e24');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
