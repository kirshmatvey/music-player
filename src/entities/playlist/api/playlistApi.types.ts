import type { PlaylistFormArgs } from "@/entities/createPlaylistForm/model/createPlaylistForm.types.ts"

export type UpdatePlaylistArgs = PlaylistFormArgs & {
  tagIds: string[]
}