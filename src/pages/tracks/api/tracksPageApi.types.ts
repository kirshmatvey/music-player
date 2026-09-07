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
