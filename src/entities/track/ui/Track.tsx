import s from "./Track.module.css"
import type { TrackData } from "@/entities/track/model/track.types.ts"
import defaultCover from "@/entities/playlist/assets/images/default-playlist-cover.png"
import isLikedImg from "../assets/icons/Heart_Fill_XS.svg"
import isNotLikedImg from "../assets/icons/FavoriteBorderOutlined.svg"
import isDislikedImg from "../assets/icons/DislikeActive.svg"
import isNotDislikedImg from "../assets/icons/DislikeInactive.svg"
import {
  useRemoveTrackReactionMutation,
  useToggleTrackDislikeMutation,
  useToggleTrackLikeMutation
} from "@/entities/track/api/trackApi.ts"
import { curriedUserReactionHandler } from "@/shared/utils/userReactionHandler.ts"

type Props = {
  track: TrackData
}

export const Track = ({ track }: Props) => {
  // const [search, setSearch] = useState<string>("")
  const [likeTrigger] = useToggleTrackLikeMutation()
  const [dislikeTrigger] = useToggleTrackDislikeMutation()
  const [removeReactionTrigger] = useRemoveTrackReactionMutation()

  const isLiked = track.attributes.currentUserReaction === 1
  const isDisliked = track.attributes.currentUserReaction === -1

  const isLikedSrc = isLiked ? isLikedImg : isNotLikedImg
  const isDislikedSrc = isDisliked ? isDislikedImg : isNotDislikedImg
  const coverImage = track.attributes.images.main.find((cover) => {
    return cover.type === "original"
  })
  const coverSrc = coverImage ? coverImage.url : defaultCover
  // конвертация времени из ISO в легкочитаемое
  const timeFromISO = new Date(track.attributes.addedAt).toLocaleDateString("en-UK")
  // обрезаем название трека, если оно больше 25 символов
  const trackTitle = track.attributes.title.length > 25 ? track.attributes.title.slice(0, 22) + '...' : track.attributes.title

  const userReactionHandler = curriedUserReactionHandler(removeReactionTrigger, likeTrigger, dislikeTrigger, track.id)

  return (
    <li key={track.id} className={s.track}>
      <img className={s.trackCover} src={coverSrc} alt="track-cover" />
      <div className={s.trackTitleWrapper}>
        <span className={s.trackTitle}>{trackTitle}</span>
        <span className={s.trackAuthor}>{track.attributes.user.name}</span>
      </div>
      <div>
        <img src={isLikedSrc} alt="is-liked" onClick={() => {
          userReactionHandler(1, track.attributes.currentUserReaction)
        }} />
        <span>{track.attributes.likesCount}</span>
      </div>
      <img src={isDislikedSrc} alt="is-disliked" onClick={() => {
        userReactionHandler(-1, track.attributes.currentUserReaction)
      }} />
      <span>{timeFromISO}</span>
    </li>
  )
}
