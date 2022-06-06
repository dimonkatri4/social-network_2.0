import React, { useEffect } from 'react'
import './App.scss'
import Main from './components/Main/Main'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { initializeApp } from './store/appThunks'
import Preloader from './components/common/Preloader/Preloader'
import HeaderContainer from "./components/Header/HeaderContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './fontawesome'

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
            <HeaderContainer />
            <Main />
            <FontAwesomeIcon icon={["fab",'camera']} />
        </div>
    )
}

export default App
