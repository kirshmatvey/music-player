import { basePlayerApi } from "@/shared/api"
import type { PlaylistsResponse } from "@/pages/playlists/api/playlistsPageApi.types.ts"

export const playlistsPageApi = basePlayerApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPlaylists: builder.query<PlaylistsResponse, void>({
      query: () => ({
        url: "/playlists",
        method: "GET",
      }),
    }),
  }),
})

export const { useGetAllPlaylistsQuery } = playlistsPageApi
