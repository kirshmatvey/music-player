import { type fetchTracksResponseSchema } from "@/pages/tracks/api/tracksPageApi.schemas.ts"
import z from "zod"

export type FetchTracksResponse = z.infer<typeof fetchTracksResponseSchema>

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

