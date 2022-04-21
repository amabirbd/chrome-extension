import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemOneTodos: [],
  itemTwoTodos: [],
  itemThreeTodos: [],
};

export const itemSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToItemOne: (state, action) => {
      state.itemOneTodos = [...state.itemOneTodos, action.payload];
    },
    addToItemTwo: (state, action) => {
      state.itemTwoTodos = [...state.itemTwoTodos, action.payload];
    },
    addToItemThree: (state, action) => {
      state.itemThreeTodos = [...state.itemThreeTodos, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToItemOne, addToItemTwo, addToItemThree } = itemSlice.actions;

export default itemSlice.reducer;
