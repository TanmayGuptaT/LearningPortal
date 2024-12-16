import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
// import {thunk} from 'redux-thunk';
export type AppDispatch = typeof store.dispatch;

import AsyncStorage from "@react-native-async-storage/async-storage";

import rootReducer from "./rootReducer";

const persistConfig = {
  key: "course",
  storage: AsyncStorage,
  whitelist: ["course","profile"],
  blacklist: [],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: pReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type IRootState = ReturnType<typeof store.getState>;

const persistor = persistStore(store);

export { store, persistor };
