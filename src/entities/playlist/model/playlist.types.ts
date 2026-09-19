import type { Images, Tags, User } from "@/shared/types"
import type { CurrentUserReaction } from "@/shared/variables"

export type PlaylistData = {
  attributes: PlaylistAttributes
  id: string
  type: "playlists"
}

type PlaylistAttributes = {
  title: string
  addedAt: string
  updatedAt: string
  order: number
  user: User
  images: Images
  tags: Tags[]
  likesCount: number
  dislikesCount: number
  currentUserReaction: CurrentUserReaction
  tracksCount: number
  duration: number
  description: string
}
