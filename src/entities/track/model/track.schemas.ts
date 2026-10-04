import z from 'zod'
import { currentUserReactionSchema, imagesSchema, userSchema } from "@/shared/schemas"

export const trackAttributesAttachmentSchema = z.object({
  id: z.string(),
  addedAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  version: z.int().nonnegative(),
  url: z.url(),
  contentType: z.string(),
  originalName: z.string(),
  fileSize: z.int().nonnegative(),
})

export const trackRelationshipsSchema = z.object({
  artists: z.object({
    data: z.array(
      z.object({
        id: z.string(),
        type: z.literal('artists'),
      })
    ),
  }),
})

export const trackAttributesSchema = z.object({
  title: z.string(),
  addedAt: z.iso.datetime(),
  attachments: z.array(trackAttributesAttachmentSchema),
  images: imagesSchema,
  currentUserReaction: currentUserReactionSchema,
  user: userSchema,
  isPublished: z.boolean(),
  publishedAt: z.iso.datetime(),
})

export const trackDataSchema = z.object({
  id: z.string(),
  type: z.literal('tracks'),
  attributes: trackAttributesSchema,
  relationships: trackRelationshipsSchema,
})