import { debounce } from "@/shared/utils/debounce.ts"

type Props = {
  callback: (value: string) => void
}

export const SearchBar = ({ callback }: Props) => {
  const debouncedSetSearch = debounce(callback)

  return (
    <>
      <input
        type={"search"}
        placeholder={"Введите название плейлиста"}
        onChange={(e) => debouncedSetSearch(e.currentTarget.value)}
      />
    </>
  )
}
