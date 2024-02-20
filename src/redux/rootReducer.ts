import { combineReducers } from "redux";
import { persistedAppReducer } from "./appSlice/appSlice";

const rootReducer = combineReducers({
  app: persistedAppReducer,
});

export default rootReducer;
