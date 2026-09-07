import type { TrackData } from "@/entities/track/model/track.types.ts"

export type TracksResponse = {
  data: TrackData[]
  meta: TracksMeta
  included: TracksIncluded
}

type TracksMeta = {
  page: number
  pageSize: number
  totalCount: number
  pagesCount: number
  nextCursor: string
}

type TracksIncluded = {
  id: string
  type: string
  attributes: {
    name: string
  }
}
