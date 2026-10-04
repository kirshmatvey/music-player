import { baseApi } from "@/shared/api"
import type { FetchTracksResponse } from "@/pages/tracks/api/tracksPageApi.types.ts"

export const tracksPageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchTracks: build.infiniteQuery<FetchTracksResponse, void, string | undefined>({
      infiniteQueryOptions: {
        initialPageParam: undefined,
        getNextPageParam: lastPage => {
          return lastPage.meta.nextCursor || undefined
        },
      },
      query: ({ pageParam }) => {
        return {
          url: 'playlists/tracks',
          params: { cursor: pageParam, pageSize: 15, paginationType: 'cursor' },
        }
      },
      providesTags: ['Tracks']
    }),
    fetchTracksFromPlaylist: build.query<FetchTracksResponse, string>({
      query: (playlistId) => ({
        url: `playlists/${playlistId}/tracks`,
        method: "GET",
      }),
    }),
  }),
})

export const { useFetchTracksInfiniteQuery, useFetchTracksFromPlaylistQuery } = tracksPageApi
