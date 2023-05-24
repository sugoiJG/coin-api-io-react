import React from 'react'
import { StrictMode } from 'react'
import { ReactDOM } from 'react'
import './style.css';
import App from './App';
import { BrowserRouter, Router } from 'react-router-dom';


ReactDOM.render(
    <StrictMode>
        <Router>
            <App/>
        </Router>
    </StrictMode>,
    document.getElementById("root")
)