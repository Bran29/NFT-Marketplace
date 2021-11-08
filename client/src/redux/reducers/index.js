import { combineReducers } from "redux";
import { nftReducer, selectedNftReducer } from "./nftReducer";
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";

const reducers = combineReducers({
  allNft: nftReducer,
  nft: selectedNftReducer,
  auth:authReducer,
  message:messageReducer
});

export default reducers;
