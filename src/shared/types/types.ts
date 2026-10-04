import { coverSchema, DomainMetaSchema, imagesSchema, tagSchema, userSchema } from "@/shared/schemas"
import z from "zod"

export type Artists = {
  data: ArtistData[]
}

export type ArtistData = {
  id: string
  type: string
}

export type DomainMeta = z.infer<typeof DomainMetaSchema>

export type Tag = z.infer<typeof tagSchema>
export type User = z.infer<typeof userSchema>
export type Cover = z.infer<typeof coverSchema>
export type Images = z.infer<typeof imagesSchema>
