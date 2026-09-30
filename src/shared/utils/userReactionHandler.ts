import type { CurrentUserReaction } from "@/shared/variables"

type ReactionHandler = (arg: { trackId: string }) => void

type Props = {
  removeReactionHandler: ReactionHandler
  likeHandler: ReactionHandler,
  dislikeHandler: ReactionHandler,
  itemId: string,
}

type InnerProps = {
  purpose: 1 | -1, // like | dislike
  currentReaction: CurrentUserReaction
}

// Функция-декоратор, которая принимает сначала 4 аргумента и запоминает их (так как при каждом использовании функции
// эти аргументы предположительно локально будут одинаковыми), чтобы в будущем не передавать их повторно.
export const userReactionHandler = ({
                                             removeReactionHandler,
                                             likeHandler,
                                             dislikeHandler,
                                             itemId
                                           }: Props) => function inner({ purpose, currentReaction }: InnerProps) {
  if (currentReaction && purpose === currentReaction) {
    removeReactionHandler({ trackId: itemId })
  } else if (purpose === 1) {
    likeHandler({ trackId: itemId })
  } else {
    dislikeHandler({ trackId: itemId })
  }
}

