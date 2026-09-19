import { basePlayerApi } from "@/shared/api"

import type { UpdatePlaylistArgs } from "./playlistApi.types.ts"

export const playlistApi = basePlayerApi.injectEndpoints({
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
      invalidatesTags: ["Playlists"],
    }),
    deletePlaylist: builder.mutation({
      query: ({ playlistId }) => ({
        url: `playlists/${playlistId}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, error) => (!error ? ["Playlists"] : ["None"]),
    }),
  }),
})

export const { useUpdatePlaylistMutation, useDeletePlaylistMutation } = playlistApi
