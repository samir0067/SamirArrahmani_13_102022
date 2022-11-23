import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "store/reducers/rootReducer";
import logger from "redux-logger";

const storeConfig = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof storeConfig.getState>;
export default storeConfig;
