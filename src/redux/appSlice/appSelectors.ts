import { AppState } from "./appSlice.type";

export const getIsAssetsOpen = (state: { app: AppState }) => state.app.isAssetsOpen;
export const getIsAuthOpen = (state: { app: AppState }) => state.app.isAuthOpen;
export const getShowCode = (state: { app: AppState }) => state.app.showCode;
export const getOperations = (state: { app: AppState }) => state.app.operations;
