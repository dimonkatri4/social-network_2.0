import React, { useEffect } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { initializeApp } from './store/appThunks'
import Preloader from './components/common/Preloader/Preloader'

function App() {
    const dispatch = useAppDispatch()
    const initialized = useAppSelector((state) => state.app.initialized)

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!initialized) {
        return <Preloader />
    }
    return (
        <div className="wrapper">
            <Header />
            <Main />
        </div>
    )
}

export default App
