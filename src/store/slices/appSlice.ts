/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialState = {
  sidebar: {
    isopen: false,
    type: "CONTACT",
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
  },
});

export const appState = () => (state) => state.app;

export default appSlice.reducer;
export const { toggleSideBar, updateSideBarType } = appSlice.actions;
