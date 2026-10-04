import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQueryWithReauth } from "@/shared/utils/baseQueryWithReauth.ts"
import { AUTH_KEYS } from "@/shared/variables"

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Playlists", "Tracks", 'Auth'],
  keepUnusedDataFor: 5,
  // refetchOnFocus: true, todo: включить потом
  // refetchOnReconnect: true, todo: включить потом
  endpoints: (build) => ({
    logout: build.mutation<void, void>({
      query: () => {
        const refreshToken = localStorage.getItem(AUTH_KEYS.refreshToken)
        return {
          url: '/auth/logout',
          method: 'POST',
          body: {refreshToken}
        }
      },
      async onQueryStarted(_args, { queryFulfilled, dispatch }) {
        await queryFulfilled
        localStorage.removeItem(AUTH_KEYS.accessToken)
        localStorage.removeItem(AUTH_KEYS.refreshToken)
        dispatch(baseApi.util.resetApiState())
      },
    }),
  }),
})

export const { useLogoutMutation } = baseApi
