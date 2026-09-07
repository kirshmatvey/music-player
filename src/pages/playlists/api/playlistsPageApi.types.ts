import type { DomainMeta } from "@/shared/types"
import type { PlaylistData } from "@/entities/playlist/model/playlist.types.ts"

export type PlaylistsResponse = {
  data: PlaylistData[]
  meta: DomainMeta
}
