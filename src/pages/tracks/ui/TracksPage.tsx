import { useGetAllTracksQuery } from "@/pages/tracks/api/tracksPageApi.ts"
import { Track } from "@/entities/track/ui/Track.tsx"
import s from "./TracksPage.module.css"

export const TracksPage = () => {
  const { data } = useGetAllTracksQuery()
  return (
    <>
      <ol className={s.tracksWrapper}>
        {data?.data.map((track) => {
          return <Track key={track.id} track={track} />
        })}
      </ol>
    </>
  )
}
