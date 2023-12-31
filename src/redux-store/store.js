import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// import { compose, createStore, applyMiddleware } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

// const composeEnhancers = composeEnhancer(applyMiddleware(...middleware));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});
// export const store = createStore(persistedReducer, undefined, composeEnhancers);
// export const persistStor = persistStore(store);
