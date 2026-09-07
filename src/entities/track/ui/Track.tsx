import s from "./Track.module.css"
import type { TrackData } from "@/entities/track/model/track.types.ts"

type Props = {
  track: TrackData
}

export const Track = ({ track }: Props) => {
  return (
    <li key={track.id} className={s.track}>
      <span>{track.attributes.title}</span>
      <span>{track.attributes.user.name}</span>
      <span>{track.attributes.addedAt}</span>
      <span>{track.attributes.likesCount}</span>
    </li>
  )
}
