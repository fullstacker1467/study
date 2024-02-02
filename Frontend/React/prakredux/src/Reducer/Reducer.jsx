import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("users")) || [
  { id: 1, name: "salom", email: "salom" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state = localStorage.setItem(
        "users",
        JSON.stringify([...state, action.payload])
      );
    },
    refreshReducer: (state) =>
      (state = JSON.parse(localStorage.getItem("users"))),
    setLocal: (state) =>
      (state = localStorage.setItem("users", JSON.stringify(state))),
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const user = state.find((u) => u.id == id);
      if (user) {
        (user.name = name), (user.email = email);
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const user = state.find((u) => u.id == id);
      if (user) {
        return state.filter((u) => u.id !== id);
      }
    },
  },
});

export const { addUser, refreshReducer, editUser, deleteUser, setLocal } =
  userSlice.actions;
export default userSlice.reducer;
