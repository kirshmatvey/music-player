import { basePlayerApi } from "@/shared/api"
import type { TracksResponse } from "@/pages/tracks/api/tracksPageApi.types.ts"

export const tracksPageApi = basePlayerApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTracks: builder.query<TracksResponse, void>({
      query: () => ({
        url: "playlists/tracks",
        method: "GET",
      }),
    }),
  }),
})

export const { useGetAllTracksQuery } = tracksPageApi
