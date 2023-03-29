import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./RootReducer";

export const store = configureStore({
    reducer: rootReducer
});

if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./RootReducer", () => store.replaceReducer(rootReducer));
}

// https://redux-toolkit.js.org/tutorials/quick-start
// Infer the `ReduxState` and `AppDispatch` types from the store itself
export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
