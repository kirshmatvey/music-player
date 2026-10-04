import { Route, Routes } from "react-router"
import { Path } from "@/shared/variables/constants.ts"
import { MainPage } from "@/pages/main"
import { PlaylistsPage } from "@/pages/playlists"
import { TracksPage } from "@/pages/tracks"
import { ProfilePage } from "@/pages/profile"
import { PageNotFound } from "@/pages/pageNotFound"
import { OAuthCallback } from "@/entities/oAuthCallback/ui/OAuthCallback.tsx"

export const Routing = () => {
  return (
    <Routes>
      <Route path={Path.Main} element={<MainPage />} />
      <Route path={Path.Playlists} element={<PlaylistsPage />} />
      <Route path={Path.Tracks} element={<TracksPage />} />
      <Route path={Path.Profile} element={<ProfilePage />} />
      <Route path={Path.OAuthRedirect} element={<OAuthCallback />} />
      <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
  )
}
