import { ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART } from '../../constants'

import { CartActionTypes, IAddBook } from '../../types'

export const addBookToCart = (book: IAddBook): CartActionTypes  => ({
  type: ADD_BOOK_TO_CART,
  payload: book
})

export const removeBookFromCart = (id: number): CartActionTypes => ({
  type: REMOVE_BOOK_FROM_CART,
  payload: id
})