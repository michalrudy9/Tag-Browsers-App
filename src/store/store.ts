import { configureStore } from "@reduxjs/toolkit";
import amountOfTagsSlice from "./amountOfTagsSlice";
import sortTagsSlice from "./sortTagsSlice";
import firstSubmitterSlice from "./firstSubmitterSlice";

const store = configureStore({
  reducer: {
    amountOfTags: amountOfTagsSlice.reducer,
    sortTags: sortTagsSlice.reducer,
    firstSubmitter: firstSubmitterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
