import { configureStore } from "@reduxjs/toolkit"
import { basePlayerApi } from "@/shared/api/basePlayerApi.ts"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
  reducer: {
    [basePlayerApi.reducerPath]: basePlayerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(basePlayerApi.middleware),
})

setupListeners(store.dispatch)
