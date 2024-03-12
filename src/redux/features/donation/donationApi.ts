import { baseApi } from "@/redux/api/baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    giveDonation: builder.mutation({
      query: (donation) => ({
        url: "/donation",
        method: "POST",
        body: donation,
      }),
      //   invalidatesTags: [""],
    }),

    getDonation: builder.query({
      query: (transactionId) => ({
        url: `/donation/${transactionId}`,
        method: "GET",
      }),
      // providesTags: ["comments"],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformResponse: (response: any) => {
        return response?.result;
      },
    }),
  }),
});
export const { useGiveDonationMutation, useGetDonationQuery } = donationApi;
