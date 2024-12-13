import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RiegoInfo } from '../config/entities/riegoInfo'
import { RiegoResponse } from '../config/responses/riegoResponse';
import { riegoMapper } from '../config/mapper/riegoMapper';

export const riegoApi = createApi({
    reducerPath: 'riegoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://10.208.10.1:3000/' }),
    endpoints: (builder) => ({
        getValvulaRiego: builder.query<RiegoInfo[], void>({
            query: () => 'items',
            transformResponse: (response: RiegoResponse[]) => response.map(riegoMapper),
        },
        ),}),
})

export const { useGetValvulaRiegoQuery } = riegoApi