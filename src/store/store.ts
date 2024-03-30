import { configureStore } from "@reduxjs/toolkit";
import amountOfTagsSlice from "./amountOfTagsSlice";
import sortTagsSlice from "./sortTagsSlice";
import firstSubmitterSlice from "./firstSubmitterSlice";
import rangeTagsSlice from "./rangeTagsSlice";

const store = configureStore({
  reducer: {
    amountOfTags: amountOfTagsSlice.reducer,
    sortTags: sortTagsSlice.reducer,
    firstSubmitter: firstSubmitterSlice.reducer,
    rangeTags: rangeTagsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
