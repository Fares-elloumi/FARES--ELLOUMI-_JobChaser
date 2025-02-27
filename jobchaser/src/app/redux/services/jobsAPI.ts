
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jobApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // json filer är i public folder
  endpoints: (builder) => ({
    getjobs: builder.query({
      query: () => 'jobs.json' // sökväg till json filen
    }),
  }),
});

export const { useGetjobsQuery } = jobApi;

