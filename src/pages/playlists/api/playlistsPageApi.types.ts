import type { DomainMeta } from "@/shared/types"
import type { PlaylistData } from "@/entities/playlist/model/playlist.types.ts"

export type PlaylistsResponse = {
  data: PlaylistData[]
  meta: DomainMeta
}

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
