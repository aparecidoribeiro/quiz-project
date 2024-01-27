import { configureStore } from '@reduxjs/toolkit'
import dateReducer from '../features/date'
import nextReducer from '../features/next'
import counterReducer from '../features/counter'

export const store = configureStore({
    reducer: {
        date: dateReducer,
        next: nextReducer,
        counter: counterReducer,
    }
})