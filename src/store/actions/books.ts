import { SET_BOOKS, SET_IS_LOADING } from '../../constants'
import { BooksActionTypes, IBookData } from '../../types'

export const setBooks = (books: IBookData[]): BooksActionTypes => ({
  type: SET_BOOKS,
  payload: books
})

export const setBooksLoading = (isLoading: boolean): BooksActionTypes => ({
  type: SET_IS_LOADING,
  payload: isLoading
})
