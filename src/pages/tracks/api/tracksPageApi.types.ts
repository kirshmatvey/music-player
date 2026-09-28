import type { TrackData } from "@/entities/track/model/track.types.ts"
import type { DomainMeta } from "@/shared/types"

export type TracksResponse = {
  data: TrackData[]
  meta: TracksMeta
  included: TracksIncluded
}

type TracksMeta = DomainMeta & { nextCursor: string }

type TracksIncluded = {
  id: string
  type: string
  attributes: {
    name: string
  }
}

export type FetchTracksArgs = {
  pageNumber?: number
  pageSize?: number
  search?: string
  sortBy?: 'publishedAt' | 'likesCount'
  sortDirection?: 'asc' | 'desc'
  tagsIds?: string[]
  artistsIds?: string[]
  userId?: string
  includeDrafts?: boolean
  paginationType?: 'offset' | 'cursor'
  cursor?: string
}

