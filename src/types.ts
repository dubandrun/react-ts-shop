// Redux types
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

// AppContainer types

export interface IBooksAndFilter {
  books: {
    items: Array<IAddBook>,
    isLoading: boolean
  },
  filter: {
    filteredBy: string,
    search: string
  }
}

export interface IMapStateToPropsAppContainer {
  books: Array<IAddBook>,
  isLoading: boolean
}

export interface IAppContainer {
  setBooks: Function,
  addBookToCart: Function, 
  removeBookFromCart: Function,
  isLoading: boolean,
  books: Array<IAddBook>
}
// App types
 
// BookCardContainer types
export interface IMapStateToPropsBookCardContainer {
  addedCount: number
}

export interface IBookCardState {
  cart: {
    items: Array<IAddBook>
  }
}
// Book types
 
// FiltersContainer types
export interface IMapStateToPropsFilterContainer {
  activeItem: string,
  inputValue: string
}

export interface IFilter {
  filter: {
    filteredBy: string,
    search: string
  }
}

export interface IFilterContainer {
  setFilter: Function,
  setSearch: Function,
  activeItem: string,
  inputValue: string,
}
// Filters types
 
// MenuContainer types
export type Cart = {
  cart: {
    items: Array<IAddBook>
  }
}
export interface IMapStateToPropsMenuContainer {
  totalPrice: number,
  totalBooks: number,
  items: Array<IAddBook>,
}
// Menu types