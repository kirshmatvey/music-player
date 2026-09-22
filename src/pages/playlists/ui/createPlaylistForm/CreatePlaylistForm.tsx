import { useCreatePlaylistMutation } from "@/pages/playlists/api/playlistsPageApi.ts"
import type { PlaylistFormArgs } from "@/entities/playlist/api/playlistApi.types.ts"
import { useForm } from "react-hook-form"

export const CreatePlaylistForm = () => {
  const { register, handleSubmit, reset } = useForm<PlaylistFormArgs>()
  const [createPlaylistTrigger] = useCreatePlaylistMutation()

  const createPlaylistHandler = (data: PlaylistFormArgs) => {
    createPlaylistTrigger({
      title: data.title,
      description: data.description,
    })
      .unwrap()
      .then(() => {
        reset({ title: "", description: "" })
      })
  }

  return (
    <form onSubmit={handleSubmit(createPlaylistHandler)}>
      <input placeholder={"title"} {...register("title")} />
      <input placeholder={"description"} {...register("description")} />
      <button type={"submit"}>create</button>
    </form>
  )
}
