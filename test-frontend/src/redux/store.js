import { configureStore } from '@reduxjs/toolkit';

import dataslice from './dataslice';

import storage from 'redux-persist/lib/storage';

import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, dataslice)

export const store = configureStore({
  reducer: {
    // our reducers goes here
     persistedReducer
  },
});

export const persistor = persistStore(store)

