import { baseApi } from "@/shared/api"

import type { UpdatePlaylistArgs } from "./playlistApi.types.ts"

export const playlistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updatePlaylist: builder.mutation<void, { playlistId: string; body: UpdatePlaylistArgs }>({
      query: ({ playlistId, body }) => ({
        url: `playlists/${playlistId}`,
        method: "PUT",
        body: {
          data: {
            type: "playlists",
            attributes: body,
          },
        },
      }),
      invalidatesTags: (_result, error) => (error ? [] : ["Playlists"]),
    }),
    deletePlaylist: builder.mutation<void, { playlistId: string }>({
      query: ({ playlistId }) => ({
        url: `playlists/${playlistId}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, error) => (error ? [] : ["Playlists"]),
    }),
  }),
})

export const { useUpdatePlaylistMutation, useDeletePlaylistMutation } = playlistApi
