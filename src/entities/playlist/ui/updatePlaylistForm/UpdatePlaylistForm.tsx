import s from "@/entities/playlist/ui/Playlist.module.css"
import { useForm } from "react-hook-form"
import type { UpdatePlaylistArgs } from "@/entities/playlist/api/playlistApi.types.ts"
import { useUpdatePlaylistMutation } from "@/entities/playlist/api/playlistApi.ts"
import type { PlaylistData } from "@/entities/playlist/model/playlist.types.ts"

type Props = {
  closeMenuHandler: () => void
  playlist: PlaylistData
}

export const UpdatePlaylistForm = ({ closeMenuHandler, playlist }: Props) => {
  const [updatePlaylist] = useUpdatePlaylistMutation()
  const { register, handleSubmit } = useForm<UpdatePlaylistArgs>()

  const submitUpdateHandler = (data: UpdatePlaylistArgs) => {
    updatePlaylist({
      playlistId: playlist.id,
      body: {
        title: data.title,
        description: data.description,
        tagIds: playlist.attributes.tags.map((tag) => tag.id),
      },
    })
      .unwrap()
      .then(() => {
        closeMenuHandler()
      })
  }

  return (
    <form className={s.formWrapper} onSubmit={handleSubmit(submitUpdateHandler)}>
      <input {...register("title")} defaultValue={playlist.attributes.title} />
      <input {...register("description")} defaultValue={playlist.attributes.description} />
      <button type={"submit"}>save</button>
      <button type={"button"} onClick={closeMenuHandler}>
        cancel
      </button>
    </form>
  )
}
