import { useFetchTracksInfiniteQuery } from "@/pages/tracks/api/tracksPageApi.ts"
import { Track } from "@/entities/track/ui/Track.tsx"
import s from "./TracksPage.module.css"
import { useInfiniteScroll } from "@/shared/utils/useInfiniteScroll.ts"
import { LoadingTrigger } from "@/shared/components/loadingTrigger/LoadingTrigger.tsx"

export const TracksPage = () => {
  const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchTracksInfiniteQuery()
  console.log('enter')

  const { observerRef } = useInfiniteScroll({ hasNextPage, isFetching, fetchNextPage })

  const pages = data?.pages.map(page => page.data).flat() || []

  return (
    <>
      <ol className={s.tracksWrapper}>
        {pages.map((track) => {
          return <Track key={track.id} track={track} />
        })}
      </ol>
      <LoadingTrigger hasNextPage={hasNextPage} observerRef={observerRef} isFetchingNextPage={isFetchingNextPage} />
    </>
  )
}
