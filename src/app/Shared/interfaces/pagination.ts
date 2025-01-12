import { Links } from "./links"

export interface Pagination<T> {
  message: string
  status: boolean
  data: T[]
  links: Links[]
}
