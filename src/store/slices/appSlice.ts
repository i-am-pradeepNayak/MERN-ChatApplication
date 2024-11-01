/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialState = {
  sidebar: {
    isopen: false,
    type: "CONTACT",
  },
  snackbar: {
    open: false,
    message: null,
    severity: null,
  },
};

export const appPersistConfig = {
  key: "app",
  storage,
  whitelist: ["sidebar"],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSideBar(state) {
      state.sidebar.isopen = !state.sidebar.isopen;
    },
    updateSideBarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    openSnackBar(state, action) {
      state.snackbar.open = true;
      state.snackbar.message = action.payload.message;
      state.snackbar.severity = action.payload.severity;
    },
    closeSnackBar(state) {
      state.snackbar.open = false;
      state.snackbar.message = null;
      state.snackbar.severity = null;
    },
  },
});

export const sideBarState = () => (state) => state.app.sidebar;
export const snackBarState = () => (state) => state.app.snackbar;

export default appSlice.reducer;
export const { toggleSideBar, updateSideBarType, openSnackBar, closeSnackBar } =
  appSlice.actions;
