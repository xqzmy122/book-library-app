import { nanoid } from "nanoid";

export function createBookWithId(book, source) {
  return {
    ...book,
    source,
    isFavorite: false,
    id: nanoid()
  }
}