import type { PlaylistData } from "@/entities/playlist/model/playlist.types.ts"
import s from "./Playlist.module.css"

type Props = {
  playlist: PlaylistData
}

export const Playlist = ({ playlist }: Props) => {
  return (
    <li key={playlist.id} className={s.playlist}>
      <div>{playlist.attributes.title}</div>
    </li>
  )
}
