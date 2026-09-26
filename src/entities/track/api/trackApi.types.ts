import type { CurrentUserReaction } from "@/shared/variables"

export type TrackReactionResponse = {
  dislikes: number
  likes: number
  objectId: string
  value: CurrentUserReaction
}