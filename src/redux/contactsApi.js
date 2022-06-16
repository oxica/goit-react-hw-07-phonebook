import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62a8dbf5ec36bf40bdaf85f4.mockapi.io/',
  }),
  endpoints: builder => ({
    getContactsApi: builder.query({
      query: () => `contacts`,
    }),
  }),
});

export const { useGetContactsApiQuery } = contactsApi;
