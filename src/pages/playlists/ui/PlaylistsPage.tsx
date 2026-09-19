import {
  useCreatePlaylistMutation,
  useGetAllPlaylistsQuery,
} from "@/pages/playlists/api/playlistsPageApi.ts"
import { Playlist } from "@/entities/playlist/ui/Playlist.tsx"
import s from "./PlaylistsPage.module.css"
import { useForm } from "react-hook-form"
import type { PlaylistFormArgs } from "@/entities/playlist/api/playlistApi.types.ts"

export const PlaylistsPage = () => {
  const { data } = useGetAllPlaylistsQuery()
  const [createPlaylistTrigger] = useCreatePlaylistMutation()
  const createPlaylistHandler = (data: PlaylistFormArgs) => {
    createPlaylistTrigger({
      title: data.title,
      description: data.description,
    })
      .unwrap()
      .then(() => {
        reset()
      })
  }

  const { register, handleSubmit, reset } = useForm<PlaylistFormArgs>()

  return (
    <>
      <form onSubmit={handleSubmit(createPlaylistHandler)}>
        <input placeholder={"title"} {...register("title")} />
        <input placeholder={"description"} {...register("description")} />
        <button type={"submit"}>create</button>
      </form>
      <ul className={s.playlistsWrapper}>
        {data?.data.map((playlist) => (
          <Playlist key={playlist.id} playlist={playlist} />
        ))}
      </ul>
    </>
  )
}
