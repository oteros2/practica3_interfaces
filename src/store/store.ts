import { configureStore } from '@reduxjs/toolkit'
import { riegoApi } from '../http/httpRQ'

// configuracion de la tienda
export const store = configureStore({
  // se agrega el reducer de la api de riego
  reducer: {
    [riegoApi.reducerPath]: riegoApi.reducer,
  },
  // se agrega el middleware que ofrece por defecto la api de riego
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(riegoApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;