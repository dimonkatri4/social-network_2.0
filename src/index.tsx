import React from 'react';
import {QueryParamProvider} from "use-query-params";
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./store/store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <QueryParamProvider >
                    <App/>
                </QueryParamProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
