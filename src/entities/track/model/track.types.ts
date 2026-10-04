import { type trackDataSchema } from "@/entities/track/model/track.schemas.ts"
import z from "zod"

export type TrackData = z.infer<typeof trackDataSchema>
