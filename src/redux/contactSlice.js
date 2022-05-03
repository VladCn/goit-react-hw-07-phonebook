import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://626a6970737b438c1c47bf18.mockapi.io/",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    fetchContact: builder.query({
      query: (params) => {
        if (params) {
          return {
            url: "/contacts",
            params,
          };
        }
        return {
          url: "/contacts",
        };
      },
      providesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
    createContact: builder.mutation({
      query: ({ name, number }) => ({
        url: `/contacts`,
        method: "POST",
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useLazyFetchContactQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;
