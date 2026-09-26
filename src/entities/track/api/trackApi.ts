import { baseApi } from "@/shared/api"
import type { TrackReactionResponse } from "@/entities/track/api/trackApi.types.ts"

export const trackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    toggleTrackLike: build.mutation<TrackReactionResponse, {trackId: string}>({
      query: ({ trackId }) => ({
        url: `playlists/tracks/${trackId}/likes`,
        method: 'POST'
      }),
      invalidatesTags: (_result, error) => error ? [] : ['Tracks']
    }),
    toggleTrackDislike: build.mutation<TrackReactionResponse, {trackId: string}>({
      query: ({ trackId }) => ({
        url: `playlists/tracks/${trackId}/dislikes`,
        method: 'POST'
      }),
      invalidatesTags: (_result, error) => error ? [] : ['Tracks']
    }),
    removeTrackReaction: build.mutation<TrackReactionResponse, {trackId: string}>({
      query: ({ trackId }) => ({
        url: `playlists/tracks/${trackId}/reactions`,
        method: 'DELETE'
      }),
      invalidatesTags: (_result, error) => error ? [] : ['Tracks']
    })
  })
})

export const { useToggleTrackLikeMutation, useToggleTrackDislikeMutation, useRemoveTrackReactionMutation } = trackApi