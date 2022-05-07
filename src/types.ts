import { ChangeEvent, MouseEvent } from 'react';
import { MenuItemProps } from 'semantic-ui-react';
import { 
  SET_BOOKS,
  SET_IS_LOADING,
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  SET_FILTER,
  SET_SEARCH
} from './constants'
import { FILTER } from './enums';

export interface IBookData {
  author: string;
  id: number;
  image: string;
  price: number;
  rating: number;
  title: string;
}

export interface IAddBook extends IBookData {
  addedCount: number
  addBookToCart: (book: IAddBook) => CartActionTypes
}

interface ISetBookAction {
  type: typeof SET_BOOKS
  payload: IBookData[]
}

interface IAddBookToCart {
  type: typeof ADD_BOOK_TO_CART
  payload: IAddBook
}

interface ISetIsLoading {
  type: typeof SET_IS_LOADING
  payload: boolean
}

interface IRemoveBookFromCart {
  type: typeof REMOVE_BOOK_FROM_CART
  payload: number
}

interface ISetFilter {
  type: typeof SET_FILTER
  payload: string
}

interface ISetSearch {
  type: typeof SET_SEARCH
  payload: string
}

export type BooksActionTypes = ISetBookAction | ISetIsLoading
export type CartActionTypes = IAddBookToCart | IRemoveBookFromCart
export type FilterActionTypes = ISetFilter | ISetSearch

export interface IBooksAndFilter {
  books: {
    items: IAddBook[]
    isLoading: boolean
  }
  filter: {
    filteredBy: FILTER
    search: string
  }
}

export interface IMapStateToPropsAppContainer {
  books: IAddBook[]
  isLoading: boolean
}

export interface IAppContainer {
  setBooks: (value: IBookData[]) => void
  setBooksLoading: (value: boolean) => void
  isLoading: boolean
  books: IAddBook[]
}

export interface IApp {
  books: IAddBook[]
  isLoading: boolean
}

export interface IMapStateToPropsBookCardContainer {
  addedCount: number
}

export interface IBookCardState {
  cart: {
    items: IAddBook[]
  }
}

export interface IBookCard {
  title: string
  author: string
  image: string
  price: number
  rating: number
  addBookToCart: (book: IAddBook) => CartActionTypes
  addedCount: number
}

export interface IMapStateToPropsFilterContainer {
  activeItem: string
  inputValue: string
}

export interface IFilter {
  filter: {
    filteredBy: FILTER
    search: string
  }
}

export interface IFilterContainer {
  setFilter: (name: string) => void
  setSearch: (value: string) => void
  activeItem: string
  inputValue: string
}

 export interface IFilters {
  activeItem: string 
  inputValue: string 
  handleItemClick: (e: MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => void
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void 
 }


export type Cart = {
  cart: {
    items: IAddBook[]
  }
}

export interface IMapStateToPropsMenuContainer {
  totalPrice: number
  totalBooks: number
  items: IAddBook[]
}

export interface IMenuCart {
  title: string
  id: number
  image: string
  removeBookFromCart: (value: number) => void 
}

export interface IMenuHeader {
  totalPrice: number 
  totalBooks: number
  items: IAddBook[]
  removeBookFromCart:  (value: number) => void
}