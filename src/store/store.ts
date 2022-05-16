import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import profileReducer from './profileSlice'
import appReducer from './appSlice'
import userReducer from './userSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        app: appReducer,
        user: userReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
