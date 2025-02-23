import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import { jobApi } from "./services/jobsAPI";

export const store = configureStore({
  reducer: {
    filter: filterReducer, 
    [jobApi.reducerPath]: jobApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

