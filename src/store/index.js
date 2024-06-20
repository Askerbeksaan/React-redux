import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from '../api/post'
import orderReducer from '../hooks/orderReducer'

export const store = configureStore({
    reducer: {
        order: orderReducer,
        [postApi.reducerPath] : postApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
})

setupListeners(store.dispatch)