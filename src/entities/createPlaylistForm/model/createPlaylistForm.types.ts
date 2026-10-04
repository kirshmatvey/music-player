import type { createPlaylistSchema } from "@/entities/createPlaylistForm/model/createPlaylistForm.schemas.ts"
import z from 'zod'

export type PlaylistFormArgs = z.infer<typeof createPlaylistSchema>