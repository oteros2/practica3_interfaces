import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RiegoInfo } from '../config/entities/riegoInfo'
import { RiegoResponse } from '../config/responses/riegoResponse';
import { riegoMapper } from '../config/mapper/riegoMapper';

// API para obtener los datos de los sistemas de riego y de las valvulas
export const riegoApi = createApi({
    reducerPath: 'riegoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://172.17.0.1:3000/' }),
    endpoints: (builder) => ({
        // metodo get para obtener los datos de los sistemas de riego y de las valvulas
        getValvulaRiego: builder.query<RiegoInfo[], void>({
            query: () => 'items',
            transformResponse: (response: RiegoResponse[]) => response.map(riegoMapper),
        }),

        // metodo post para cambiar mandar un objeto con el nuevo estado de la valvula
        postValvulaRiego: builder.mutation<RiegoInfo, RiegoInfo>({
            query: (newItem) => ({
                url: 'items',
                method: 'POST',
                body: newItem,
            }),
        }),
    }),
})

export const { useGetValvulaRiegoQuery, usePostValvulaRiegoMutation } = riegoApi