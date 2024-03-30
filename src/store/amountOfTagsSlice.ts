import { createSlice } from "@reduxjs/toolkit";

const initialState: { amount: string } = { amount: "all" };

const amountOfTagsSlice = createSlice({
  name: "amountOfTags",
  initialState: initialState,
  reducers: {
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { setAmount } = amountOfTagsSlice.actions;
export default amountOfTagsSlice;
