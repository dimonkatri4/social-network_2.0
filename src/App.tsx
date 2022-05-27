import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Login from "./components/Login/Login";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Login/>
        </div>
    )
}

export default App
