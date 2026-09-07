import { useGetAllTracksQuery } from "@/pages/tracks/api/tracksPageApi.ts"
import { Track } from "@/entities/track/ui/Track.tsx"

export const TracksPage = () => {
  const { data } = useGetAllTracksQuery()
  return (
    <>
      <ul>
        {data?.data.map((track) => {
          return (
            <li key={track.id}>
              <Track track={track} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
