import { type playlistDataSchema } from "@/entities/playlist/model/playlist.schemas.ts"
import z from "zod"

export type PlaylistData = z.infer<typeof playlistDataSchema>
