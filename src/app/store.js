import { configureStore } from '@reduxjs/toolkit';
import ImageSliceReducer from "../slices/imageData";
import filterSliceReducer from "../slices/filter";

export const store = configureStore({
  reducer: {
    images: ImageSliceReducer,
    filter: filterSliceReducer,
  },
});
