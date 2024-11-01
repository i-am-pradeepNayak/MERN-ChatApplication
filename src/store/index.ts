import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import appReducer, { appPersistConfig } from "./slices/appSlice";
import authReducer from "./slices/authSlice";

const persistedAppreducer = persistReducer(appPersistConfig, appReducer);

const rootReducer = combineReducers({
  app: persistedAppreducer,
  auth: authReducer,
});

// store configuration
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Since we use typescript, lets utilize `useDispatch`
export const useDispatch = () => useDispatchBase<AppDispatch>();

// And utilize `useSelector`
export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected,
): TSelected => useSelectorBase<RootState, TSelected>(selector);
