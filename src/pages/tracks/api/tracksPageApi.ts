import { baseApi } from "@/shared/api"
import type { TracksResponse } from "@/pages/tracks/api/tracksPageApi.types.ts"

export const tracksPageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchTracks: build.infiniteQuery<TracksResponse, void, string | undefined>({
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
    }),
    fetchTracksFromPlaylist: build.query<TracksResponse, string>({
      query: (playlistId) => ({
        url: `playlists/${playlistId}/tracks`,
        method: "GET",
      }),
    }),
  }),
})

export const { useFetchTracksInfiniteQuery, useFetchTracksFromPlaylistQuery } = tracksPageApi
