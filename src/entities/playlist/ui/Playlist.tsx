import type { PlaylistData } from "@/entities/playlist/model/playlist.types.ts"
import s from "./Playlist.module.css"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDeletePlaylistMutation, useUpdatePlaylistMutation } from "@/entities/playlist/api/playlistApi.ts"
import type { UpdatePlaylistArgs } from "@/entities/playlist/api/playlistApi.types.ts"

type Props = {
  playlist: PlaylistData
}

export const Playlist = ({ playlist }: Props) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false)
  const [updatePlaylist] = useUpdatePlaylistMutation()
  const [deletePlaylist] = useDeletePlaylistMutation()

  const { register, handleSubmit, reset } = useForm<UpdatePlaylistArgs>()

  const submitUpdateHandler = (data: UpdatePlaylistArgs) => {
    updatePlaylist({
      playlistId: playlist.id,
      body: {
        title: data.title,
        description: data.description,
        tagIds: data.tagIds,
      },
    })
      .unwrap()
      .then(() => {
        setIsBeingEdited(false)
      })
  }
  const updatePlaylistHandler = () => {
    reset({
      title: playlist.attributes.title,
      description: playlist.attributes.description,
      tagIds: playlist.attributes.tags.map((tag) => tag.id),
    })
    setIsBeingEdited(true)
  }
  const closeUpdateMenuHandler = () => setIsBeingEdited(false)
  const deletePlaylistHandler = () => {
    deletePlaylist({ playlistId: playlist.id })
  }

  return (
    <li className={s.playlist}>
      {isBeingEdited ? (
        <form className={s.formWrapper} onSubmit={handleSubmit(submitUpdateHandler)}>
          <input {...register("title")} defaultValue={playlist.attributes.title} />
          <input {...register("description")} defaultValue={playlist.attributes.description} />
          <button type={"submit"}>save</button>
          <button type={"button"} onClick={closeUpdateMenuHandler}>
            cancel
          </button>
        </form>
      ) : (
        <>
          <h3>{playlist.attributes.title}</h3>
          <span>{playlist.attributes.user.name}</span>
          <button className={s.updateButton} onClick={updatePlaylistHandler}>
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
