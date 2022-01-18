import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contactsReducer";
import filterReducer from "./filter/filterReducer";

const persistConfig = {
    key: "contact",
    version: 1,
    storage,
    whitelist: ["contact"],
};

const middleware = (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    });

const rootReducer = combineReducers({
    contact: contactsReducer,
    filter: filterReducer,
});

const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware,
    devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;