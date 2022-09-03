import React from 'react';
import { Porvider, Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
