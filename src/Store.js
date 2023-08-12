import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./redux/Reducer";

const Store = configureStore({
    reducer: Reducer,
  });
  
export default Store;