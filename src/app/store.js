import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import timerReducer from "../features/timer/timerSlice";
import settingsReducer from "../features/settings/settingsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedSettingsReducer = persistReducer(persistConfig, settingsReducer);

const store = configureStore({
  reducer: {
    timer: timerReducer,
    settings: persistedSettingsReducer,
  },
});

export const persistor = persistStore(store);
export default store;
