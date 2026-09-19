import { basePlayerApi } from "@/shared/api"
import type { PlaylistsResponse } from "@/pages/playlists/api/playlistsPageApi.types.ts"
import type { PlaylistData } from "@/entities/playlist/model/playlist.types.ts"
import type { PlaylistFormArgs } from "@/entities/playlist/api/playlistApi.types.ts"

export const playlistsPageApi = basePlayerApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPlaylists: builder.query<PlaylistsResponse, void>({
      query: () => ({
        url: "/playlists",
        method: "GET",
      }),
      providesTags: ["Playlists"],
    }),
    createPlaylist: builder.mutation<{ data: PlaylistData }, PlaylistFormArgs>({
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
      invalidatesTags: (result) => (result ? ["Playlists"] : ["None"]),
    }),
  }),
})

export const { useGetAllPlaylistsQuery, useCreatePlaylistMutation } =
  playlistsPageApi
