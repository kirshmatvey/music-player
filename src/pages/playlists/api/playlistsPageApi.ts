import { baseApi } from "@/shared/api"
import type { FetchAllPlaylistsArgs, PlaylistsResponse } from "@/pages/playlists/api/playlistsPageApi.types.ts"
import type { PlaylistData } from "@/entities/playlist/model/playlist.types.ts"
import type { PlaylistFormArgs } from "@/entities/playlist/api/playlistApi.types.ts"

export const playlistsPageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchAllPlaylists: build.query<PlaylistsResponse, FetchAllPlaylistsArgs>({
      query: (params) => ({
        url: "/playlists",
        method: "GET",
        params,
      }),
      providesTags: ["Playlists"],
    }),
    createPlaylist: build.mutation<{ data: PlaylistData }, PlaylistFormArgs>({
      query: (body) => ({
        url: "/playlists",
        method: "POST",
        body: {
          data: {
            type: "playlists",
            attributes: body,
          },
        },
      }),
      invalidatesTags: (result) => (result ? ["Playlists"] : []),
    }),
  }),
})

export const { useFetchAllPlaylistsQuery, useCreatePlaylistMutation } = playlistsPageApi
