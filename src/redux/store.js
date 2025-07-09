import { configureStore } from "@reduxjs/toolkit";
import settings from "./slices/settings";

export const store = configureStore({
  reducer: {
    settings: settings,
  },
});
