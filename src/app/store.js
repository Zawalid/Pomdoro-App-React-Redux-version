import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "../features/timer/timerSlice";
import { loadState, saveState } from "../utils/helpers";

const persistedState = loadState();

const store = configureStore({
  reducer: timerReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
