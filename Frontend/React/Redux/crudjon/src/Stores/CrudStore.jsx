import { configureStore } from "@reduxjs/toolkit";
import CrudSlicer from "../Slicer/CrudSlicer";

export const store = configureStore({
  reducer: {
    CrudSlicer,
  },
});

export default store;
