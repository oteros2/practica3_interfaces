import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RiegoInfo } from '../config/entities/riegoInfo'

export const riegoApi = createApi({
  reducerPath: 'riegoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:3000/' }),
  endpoints: (builder) => ({
    getValvulaRiego: builder.query<RiegoInfo[], void>({
      query: () => `items`,
    }),
  }),
})

export const { useGetValvulaRiegoQuery } = riegoApi