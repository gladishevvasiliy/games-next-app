import { Game } from "../types"
import { API } from "./constants"

export const fetchData = async () => {
  const res = await fetch(API, { cache: 'force-cache' })
  return await res.json() as Game[]
}