import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { riegoApi } from '../http/httpRQ'

export const store = configureStore({
  reducer: {
    [riegoApi.reducerPath]: riegoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(riegoApi.middleware),
})

setupListeners(store.dispatch)