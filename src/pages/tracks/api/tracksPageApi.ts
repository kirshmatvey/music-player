import { baseApi } from "@/shared/api"
import type { TracksResponse } from "@/pages/tracks/api/tracksPageApi.types.ts"

export const tracksPageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTracks: builder.query<TracksResponse, void>({
      query: () => ({
        url: "playlists/tracks",
        method: "GET",
      }),
    }),
    getTracksFromPlaylist: builder.query<TracksResponse, string>({
      query: (playlistId) => ({
        url: `playlists/${playlistId}/tracks`,
        method: "GET",
      }),
    }),
  }),
})

export const { useGetAllTracksQuery, useGetTracksFromPlaylistQuery } = tracksPageApi
