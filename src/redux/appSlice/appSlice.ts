import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AppState } from "./appSlice.type";
import { operationsArray } from "operationsArray";

export const initialState: AppState = {
  operations: operationsArray,
  isAuthOpen: false,
  isAssetsOpen: false,
  showCode: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsAssetsOpen(state, action: PayloadAction<boolean>) {
      state.isAuthOpen = action.payload;
    },
    setIsAuthOpen(state, action: PayloadAction<boolean>) {
      state.isAssetsOpen = action.payload;
    },
    setShowCode(state, action: PayloadAction<boolean>) {
      state.showCode = action.payload;
    },
  },
});

const persistConfig = {
  key: "app",
  storage,
  blacklist: ["operations"],
};

export const persistedAppReducer = persistReducer(persistConfig, appSlice.reducer);

export const { setIsAssetsOpen, setIsAuthOpen, setShowCode } = appSlice.actions;

export default appSlice.reducer;
