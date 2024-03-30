import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type SortTagModel = {
  name: string;
  direction: string;
};

const initialState: SortTagModel = { name: "popular", direction: "descending" };

const sortTagsSlice = createSlice({
  name: "sortTags",
  initialState: initialState,
  reducers: {
    setSortType: (state, action: PayloadAction<SortTagModel>) => {
      state.name = action.payload.name;
      state.direction = action.payload.direction;
    },
  },
});

export const { setSortType } = sortTagsSlice.actions;
export default sortTagsSlice;
