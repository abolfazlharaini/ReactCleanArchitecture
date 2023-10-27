"use client";
import { configureStore } from '@reduxjs/toolkit';

// App
//
import reducers from './reducers';
import middlewareListener from 'shared/redux/middlewareListener';

const store = configureStore({
    reducer: reducers(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .prepend(middlewareListener.middleware),
    devTools: process.env.NODE_ENV === 'development',
});
export default store;