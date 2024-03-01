import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
    }),
    updateUser: builder.mutation({
      query: (args) => {
        return {
          url: `/update-user/${args.email}`,
          method: "PATCH",
          body: args.data,
        };
      },
      invalidatesTags: ["user"],
    }),

    getUser: builder.query({
      query: (email) => ({
        url: `/update-user/${email}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useUpdateUserMutation,
  useGetUserQuery,
} = authApi;
