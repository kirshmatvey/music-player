import { playlistDataSchema } from "@/entities/playlist/model/playlist.schemas.ts"
import z from 'zod'
import { DomainMetaSchema } from "@/shared/schemas"

export const playlistsResponseSchema = z.object({
  data: z.array(playlistDataSchema),
  meta: DomainMetaSchema,
})