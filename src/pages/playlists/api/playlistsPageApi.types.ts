import type { playlistsResponseSchema } from "@/pages/playlists/model/playlistPage.schemas.ts"
import z from 'zod'

export type PlaylistsResponse = z.infer<typeof playlistsResponseSchema>

export type FetchAllPlaylistsArgs = {
  pageNumber?: number
  pageSize?: number
  search?: string
  sortBy?: string
  sortDirection?: string
  tagIds?: string[]
  userId?: string
  trackId?: string
  onlyLikedByMe?: boolean
}

