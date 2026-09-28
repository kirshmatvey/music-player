import type { RefObject } from "react"

type Props = {
  hasNextPage: boolean
  observerRef: RefObject<HTMLDivElement | null>
  isFetchingNextPage: boolean
}

export const LoadingTrigger = ({hasNextPage, isFetchingNextPage, observerRef}: Props) => {
  return (
    <>
      {hasNextPage && (
        // Этот элемент отслеживается IntersectionObserver
        <div ref={observerRef}>
          {/*`<div style={{ height: '20px' }} />` создает "невидимую зону" в 20px в конце списка,*/}
          {/*при достижении которой автоматически загружаются новые треки. Без размеров*/}
          {/*IntersectionObserver не будет работать корректно.*/}
          {isFetchingNextPage ? (
            <div>Loading more tracks...</div>
          ) : (
            <div style={{ height: '20px' }} />
          )}
        </div>
      )}
    </>
  )
}