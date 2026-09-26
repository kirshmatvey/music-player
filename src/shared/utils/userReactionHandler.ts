import type { CurrentUserReaction } from "@/shared/variables"
import { curry } from "@/shared/utils/curry.ts"

type ReactionHandler = (arg: { trackId: string }) => void

const userReactionHandler = (
  removeReactionHandler: ReactionHandler,
  likeHandler: ReactionHandler,
  dislikeHandler: ReactionHandler,
  trackId: string,
  purpose: 1 | -1, // like | dislike
  currentReaction: CurrentUserReaction,
) => {
  if (currentReaction && purpose === currentReaction) {
    removeReactionHandler({ trackId })
  } else if (purpose === 1) {
    likeHandler({ trackId })
  } else {
    dislikeHandler({ trackId })
  }
}

export const curriedUserReactionHandler = curry(userReactionHandler)

