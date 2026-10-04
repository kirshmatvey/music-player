import z from 'zod'
import { playlistDataSchema } from "@/entities/playlist/model/playlist.schemas.ts"

export const createPlaylistSchema = z.object({
  title: z
    .string()
    .min(1, 'The title length must be more than 1 character')
    .max(100, 'The title length must be less than 100 characters'),
  description: z.string().max(1000, 'The description length must be less than 1000 characters.'),
})

export const playlistCreateResponseSchema = z.object({
  data: playlistDataSchema,
})