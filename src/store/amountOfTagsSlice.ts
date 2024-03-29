import { createSlice } from "@reduxjs/toolkit";

const initialState: { amount: string } = { amount: "all" };

const amountOfTagsSlice = createSlice({
  name: "amountOfTags",
  initialState: initialState,
  reducers: {
    setValue: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { setValue } = amountOfTagsSlice.actions;
export default amountOfTagsSlice;
