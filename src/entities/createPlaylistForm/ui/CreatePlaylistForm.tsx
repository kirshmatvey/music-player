
import { useForm } from "react-hook-form"
import { useCreatePlaylistMutation } from "@/entities/createPlaylistForm/api/createPlaylistFormApi.ts"
import { zodResolver } from "@hookform/resolvers/zod"
import { createPlaylistSchema } from "@/entities/createPlaylistForm/model/createPlaylistForm.schemas.ts"
import s from "./CreatePlaylistForm.module.css"
import type { PlaylistFormArgs } from "@/entities/createPlaylistForm/model/createPlaylistForm.types.ts"

export const CreatePlaylistForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PlaylistFormArgs>({
    resolver: zodResolver(createPlaylistSchema),
  })
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
      <div>
        <input {...register('title')} placeholder={'title'} />
        {errors.title && <span className={s.error}>{errors.title.message}</span>}
      </div>
      <div>
        <input {...register('description')} placeholder={'description'} />
        {errors.description && <span className={s.error}>{errors.description.message}</span>}
      </div>
      <button type={"submit"}>create</button>
    </form>
  )
}
