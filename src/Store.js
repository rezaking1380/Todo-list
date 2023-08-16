import { configureStore } from "@reduxjs/toolkit";
import Reducer, {initialState} from "./redux/Reducer";

const Store = configureStore({
    reducer: Reducer,
    initialState
  });
  
export default Store;