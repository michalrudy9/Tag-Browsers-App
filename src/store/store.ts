import { configureStore } from "@reduxjs/toolkit";
import amountOfTagsSlice from "./amountOfTags-slice";

const store = configureStore({
  reducer: {
    amountOfTags: amountOfTagsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
