import { baseApi } from "@/shared/api"
import type { PlaylistData } from "@/entities/playlist/model/playlist.types.ts"
import type { PlaylistFormArgs } from "../model/createPlaylistForm.types.ts"
import { playlistCreateResponseSchema } from "@/entities/createPlaylistForm/model/createPlaylistForm.schemas.ts"
import { catchWithZod } from "@/shared/utils/catchWithZod.ts"

export const createPlaylistFormApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPlaylist: build.mutation<{ data: PlaylistData }, PlaylistFormArgs>({
      query: (body) => ({
        url: "/playlists",
        method: "POST",
        body: {
          data: {
            type: "playlists",
            attributes: body,
          },
        },
      }),
      ...catchWithZod(playlistCreateResponseSchema),
      invalidatesTags: (result) => (result ? ["Playlists"] : []),
    }),
  })
})

export const { useCreatePlaylistMutation } = createPlaylistFormApi