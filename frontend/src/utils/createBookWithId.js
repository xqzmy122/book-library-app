import { nanoid } from "nanoid";

export function createBookWithId(book) {
  return {
    ...book,
    isFavorite: false,
    id: nanoid()
  }
}