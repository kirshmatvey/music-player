import type { PlaylistData } from "@/entities/playlist/model/playlist.types.ts"
import s from "./Playlist.module.css"
import { useState } from "react"
import { useDeletePlaylistMutation } from "@/entities/playlist/api/playlistApi.ts"
import { UpdatePlaylistForm } from "@/entities/playlist/ui/updatePlaylistForm/UpdatePlaylistForm.tsx"
import defaultCover from "@/entities/playlist/assets/images/default-playlist-cover.png"

type Props = {
  playlist: PlaylistData
}

export const Playlist = ({ playlist }: Props) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false)
  const [deletePlaylist] = useDeletePlaylistMutation()

  const originalImage = playlist.attributes.images.main.find((cover) => {
    return cover.type === "original"
  })
  const imageSrc = originalImage ? originalImage.url : defaultCover

  const closeUpdateMenuHandler = () => setIsBeingEdited(false)
  const deletePlaylistHandler = () => {
    deletePlaylist({ playlistId: playlist.id })
  }
  const openEditModeHandler = () => {
    setIsBeingEdited(true)
  }

  return (
    <li className={s.playlist}>
      {isBeingEdited ? (
        <UpdatePlaylistForm closeMenuHandler={closeUpdateMenuHandler} playlist={playlist} />
      ) : (
        <>
          <img className={s.playlistCover} src={imageSrc} alt="playlist-cover" />
          <h3>{playlist.attributes.title}</h3>
          <span>{playlist.attributes.user.name}</span>
          <button className={s.updateButton} onClick={openEditModeHandler}>
            update
          </button>
          <button className={s.updateButton} onClick={deletePlaylistHandler}>
            delete
          </button>
        </>
      )}
    </li>
  )
}
