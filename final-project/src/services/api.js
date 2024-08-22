import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://66ae63acb18f3614e3b796ad.mockapi.io/' }), 
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getCustomers: builder.query({
      query: () => '/customers',
    }),
  }),
});

export const { useGetProductsQuery, useGetCustomersQuery } = productsApi;
