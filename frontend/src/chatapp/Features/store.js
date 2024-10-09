import { configureStore } from "@reduxjs/toolkit";

import refreshSidebar from "./refreshSidebar";

const store = configureStore({
  reducer: {
    refreshKey: refreshSidebar,
  },
});

export default store;