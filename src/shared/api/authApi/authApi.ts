import { baseApi } from "@/shared/api/baseApi/baseApi.ts"
import type { GetMeResponse, LoginArgs, AccessDataResponse } from "@/shared/api/authApi/authApi.types.ts"
import { AUTH_KEYS } from "@/shared/variables"
import { catchWithZod } from "@/shared/utils/catchWithZod.ts"
import { accessDataResponseSchema } from "@/shared/api/authApi/authApi.schemas.ts"

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<GetMeResponse, void>({
      query: () => ({
        url: 'auth/me',
        method: 'GET',
      }),
      providesTags: ['Auth'],
    }),
    login: build.mutation<AccessDataResponse, LoginArgs>({
      query: (payload) => ({
        url: 'auth/login',
        method: 'POST',
        body: {...payload, accessTokenTTL: '3m'}
      }),
      ...catchWithZod(accessDataResponseSchema),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled
        localStorage.setItem(AUTH_KEYS.accessToken, data.accessToken)
        localStorage.setItem(AUTH_KEYS.refreshToken, data.refreshToken)
        dispatch(authApi.util.invalidateTags(['Auth', 'Tracks', 'Playlists']))
      },
    }),
  }),
})

export const {useLoginMutation, useGetMeQuery} = authApi