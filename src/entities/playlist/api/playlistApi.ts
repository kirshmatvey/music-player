import { baseApi } from "@/shared/api"

import type { UpdatePlaylistArgs } from "./playlistApi.types.ts"
import { playlistsPageApi } from "@/pages/playlists/api/playlistsPageApi.ts"

export const playlistApi = baseApi.injectEndpoints({ // todo: проверить работает ли optimistic update
  endpoints: (build) => ({
    updatePlaylist: build.mutation<void, { playlistId: string; body: UpdatePlaylistArgs }>({
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
      async onQueryStarted({ playlistId, body }, { dispatch, queryFulfilled, getState }) {
        const args = playlistsPageApi.util.selectCachedArgsForQuery(getState(), 'fetchPlaylists')

        const patchResults: any[] = []

        args.forEach(arg => {
          patchResults.push(
            dispatch(
              playlistsPageApi.util.updateQueryData(
                'fetchPlaylists',
                {
                  pageNumber: arg.pageNumber,
                  pageSize: arg.pageSize,
                  search: arg.search,
                },
                state => {
                  const index = state.data.findIndex(playlist => playlist.id === playlistId)
                  if (index !== -1) {
                    state.data[index].attributes = { ...state.data[index].attributes, ...body }
                  }
                }
              )
            )
          )
        })

        try {
          await queryFulfilled
        } catch {
          patchResults.forEach(patchResult => {
            patchResult.undo()
          })
        }
      },
      invalidatesTags: (_result, error) => (error ? [] : ["Playlists"]),
    }),
    deletePlaylist: build.mutation<void, { playlistId: string }>({
      query: ({ playlistId }) => ({
        url: `playlists/${playlistId}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, error) => (error ? [] : ["Playlists"]),
    }),
  }),
})

export const { useUpdatePlaylistMutation, useDeletePlaylistMutation } = playlistApi
