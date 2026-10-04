import { baseApi } from "@/shared/api"
import type { FetchAllPlaylistsArgs, PlaylistsResponse } from "@/pages/playlists/api/playlistsPageApi.types.ts"
import { playlistsResponseSchema } from "@/pages/playlists/model/playlistPage.schemas.ts"
import { catchWithZod } from "@/shared/utils/catchWithZod.ts"

export const playlistsPageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPlaylists: build.query<PlaylistsResponse, FetchAllPlaylistsArgs>({
      query: (params) => ({
        url: "/playlists",
        method: "GET",
        params,
      }),
      ...catchWithZod(playlistsResponseSchema),
      providesTags: ["Playlists"],
    }),
  }),
})

export const { useFetchPlaylistsQuery } = playlistsPageApi
