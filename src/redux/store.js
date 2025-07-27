import { configureStore } from "@reduxjs/toolkit";
import settings from "./slices/settings";
import clientData from "./slices/clientData";
import chargeModal from "./slices/chargeModal";

export const store = configureStore({
  reducer: {
    settings: settings,
    clientData: clientData,
    chargeModal: chargeModal,
  },
});
