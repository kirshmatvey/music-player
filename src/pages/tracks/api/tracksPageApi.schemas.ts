import z from 'zod'
import { trackDataSchema } from "@/entities/track/model/track.schemas.ts"

export const tracksMetaSchema = z.object({
  nextCursor: z.string().nullable(),
  page: z.int().positive(),
  pageSize: z.int().positive(),
  totalCount: z.int().positive().nullable(),
  pagesCount: z.int().positive().nullable(),
})

export const tracksIncludedSchema = z.object({
  id: z.string(),
  type: z.literal('artists'),
  attributes: z.object({
    name: z.string(),
  }),
})

export const fetchTracksResponseSchema = z.object({
  data: z.array(trackDataSchema),
  included: z.array(tracksIncludedSchema),
  meta: tracksMetaSchema,
})