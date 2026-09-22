import { useFetchAllPlaylistsQuery } from "@/pages/playlists/api/playlistsPageApi.ts"
import { Playlist } from "@/entities/playlist/ui/Playlist.tsx"
import s from "./PlaylistsPage.module.css"
import { CreatePlaylistForm } from "@/pages/playlists/ui/createPlaylistForm/CreatePlaylistForm.tsx"
import { Pagination, SearchBar } from "@/shared/components"
import { useEffect, useState } from "react"

export const PlaylistsPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [search, setSearch] = useState<string>("")

  const searchPlaylists = (value: string) => {
    setCurrentPage(1)
    setSearch(value)
  }

  const { data } = useFetchAllPlaylistsQuery({
    search,
    pageNumber: currentPage,
    pageSize: 20,
  })

  return (
    <div className={s.playlistsPageContainer}>
      <CreatePlaylistForm />
      <SearchBar callback={searchPlaylists} />
      <ul className={s.playlistsContainer}>
        {data?.data.map((playlist) => (
          <Playlist key={playlist.id} playlist={playlist} />
        ))}
      </ul>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={data?.meta.pagesCount || 1} />
    </div>
  )
}
