import { createSlice } from "@reduxjs/toolkit";

export const CrudSlicer = createSlice({
  name: "data",
  initialState: JSON.parse(localStorage.getItem("elements")) || [],
  reducers: {
    logger: (state, action) => {
      console.log(state);
      console.log(action);
    },
  },
});
export const { logger } = CrudSlicer.actions;
export default CrudSlicer.reducer;
