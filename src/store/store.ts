import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import profileReducer from './profileSlice'
import appReducer from './appSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        app: appReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
