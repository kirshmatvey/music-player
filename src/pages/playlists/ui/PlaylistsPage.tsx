import { useGetAllPlaylistsQuery } from "@/pages/playlists/api/playlistsPageApi.ts"
import { Playlist } from "@/entities/playlist/ui/Playlist.tsx"
import s from "./PlaylistsPage.module.css"

export const PlaylistsPage = () => {
  const { data } = useGetAllPlaylistsQuery()
  return (
    <>
      <ul className={s.playlistsWrapper}>
        {data?.data.map((playlist) => (
          <Playlist key={playlist.id} playlist={playlist} />
        ))}
      </ul>
    </>
  )
}
