import z from 'zod'
import { currentUserReactionSchema, imagesSchema, tagSchema, userSchema } from "@/shared/schemas"

export const playlistAttributesSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  addedAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  order: z.int(),
  dislikesCount: z.int().nonnegative(),
  likesCount: z.int().nonnegative(),
  tags: z.array(tagSchema),
  images: imagesSchema,
  user: userSchema,
  currentUserReaction: currentUserReactionSchema,
})

export const playlistDataSchema = z.object({
  id: z.string(),
  type: z.literal('playlists'),
  attributes: playlistAttributesSchema,
})