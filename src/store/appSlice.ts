import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    initialized: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initializedSuccess: (state) => {
            state.initialized = true
        },
    },
})

export const { initializedSuccess } = appSlice.actions

export default appSlice.reducer
