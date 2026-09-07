export type User = {
  id: string
  name: string
}

export type Tags = {
  id: string
  name: string
}

export type Images = {
  main: Cover[]
}

export type Artists = {
  data: ArtistData[]
}

export type ArtistData = {
  id: string
  type: string
}

export type Cover = {
  type: "original" | "medium" | "thumbnail"
  width: number
  height: number
  fileSize: number
  url: string
}

export type DomainMeta = {
  page: number
  pageSize: number
  totalCount: number
  pagesCount: number
}
