import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type RangeTags = { from: number; to: number };
type SetRangeType = { receiveAmount: number; action: string };

const initialState: RangeTags = {
  from: 1,
  to: 0,
};

const rangeTagsSlice = createSlice({
  name: "rangeTags",
  initialState: initialState,
  reducers: {
    setRange: (state, action: PayloadAction<SetRangeType>) => {
      state.from =
        action.payload.action === "incresce"
          ? (state.from += action.payload.receiveAmount)
          : (state.from -= action.payload.receiveAmount);

      state.to =
        action.payload.action === "incresce"
          ? (state.to += action.payload.receiveAmount)
          : (state.to -= action.payload.receiveAmount);
    },

    setToField: (state, action: PayloadAction<number>) => {
      state.to = action.payload;
    },
  },
});

export const { setRange, setToField } = rangeTagsSlice.actions;
export default rangeTagsSlice;
