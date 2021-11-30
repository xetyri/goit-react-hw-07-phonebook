import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'https://619e568d7f09d50017fd2aaa.mockapi.io/' 
    }),
    tagTypes: ["Contact"],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => '/contacts',
        providesTags:['Contact'],
        }),
        deleteContact: builder.mutation({
            query: (contactId) => ({
                url: `/contacts/${contactId}`,
                method :'DELETE',
            }),
            invalidatesTags :['Contact'],
        }),
        addContact: builder.mutation({
            query: (newContact)=> ({
                url: '/contacts',
                method: 'POST',
                body: newContact,
            }),
            invalidatesTags :['Contact'],
        }),
    }),
})

export const {useGetContactsQuery,useAddContactMutation,useDeleteContactMutation} = Api;
