import type { CurrentUserReaction } from "@/shared/variables"
import type { Artists, Images, User } from "@/shared/types"

export type TrackData = {
  id: string
  type: "tracks"
  attributes: TrackAttributes
  relationships: TrackRelationships
}
export type TrackAttributes = {
  title: string
  addedAt: string
  likesCount: number
  attachments: TrackAttributesAttachment[]
  images: Images
  user: User
  currentUserReaction: CurrentUserReaction
  isPublished: boolean
  publishedAt: string
  duration: number
}
export type TrackAttributesAttachment = {
  id: string
  addedAt: string
  updatedAt: string
  version: number
  url: string
  contentType: string
  originalName: string
  fileSize: number
}
export type TrackRelationships = {
  artists: Artists
}
