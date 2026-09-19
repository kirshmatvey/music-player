export type UpdatePlaylistArgs = PlaylistFormArgs & {
  tagIds: string[]
}

export type PlaylistFormArgs = {
  title: string
  description: string
}
