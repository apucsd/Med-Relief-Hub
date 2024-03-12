import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://medi-relief-hub.vercel.app/api/v1",
  }),
  tagTypes: ["Supplies", "comments", "testimonial", "volunteer", "user"],
  endpoints: () => ({}),
});
