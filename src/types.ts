import { 
  SET_BOOKS,
  SET_IS_LOADING,
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  SET_FILTER,
  SET_SEARCH
} from './constants'


export interface IAddBook {
  id: number,
  title: string,
  author: string,
  image: string,
  price: number,
  rating: number,
  addedCount: number,
}

interface ISetBookAction {
  type: typeof SET_BOOKS,
  payload: IAddBook
}
interface IAddBookToCart {
  type: typeof ADD_BOOK_TO_CART,
  payload: IAddBook
}
interface ISetIsLoading {
  type: typeof SET_IS_LOADING,
  payload: boolean
}
interface IRemoveBookFromCart {
  type: typeof REMOVE_BOOK_FROM_CART,
  payload: number
}
interface ISetFilter {
  type: typeof SET_FILTER,
  payload: string
}
interface ISetSearch {
  type: typeof SET_SEARCH,
  payload: string
}

export type BooksActionTypes = ISetBookAction | ISetIsLoading
export type CartActionTypes = IAddBookToCart | IRemoveBookFromCart
export type FilterActionTypes = ISetFilter | ISetSearch