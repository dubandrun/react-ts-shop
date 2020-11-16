import {
  SET_BOOKS
} from '../constants'

import { BooksActionTypes, IAddBook } from '../types'

export const setBooks = (books: IAddBook): BooksActionTypes => ({
  type: SET_BOOKS,
  payload: books
})