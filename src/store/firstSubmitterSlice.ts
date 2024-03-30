import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { submitter: string } = { submitter: "" };

const firstSubmitterSlice = createSlice({
  name: "firstSubmitter",
  initialState: initialState,
  reducers: {
    setSubmitter: (state, action: PayloadAction<string>) => {
      state.submitter = action.payload;
    },
  },
});

export const { setSubmitter } = firstSubmitterSlice.actions;
export default firstSubmitterSlice;
