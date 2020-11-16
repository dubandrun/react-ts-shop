import {
  SET_BOOKS,
  SET_IS_LOADING,
} from '../constants'

import { BooksActionTypes, IAddBook } from '../types'

type stateItems = {
  isLoading: boolean,
  items: IAddBook[]
}

const initialState: stateItems = {
  isLoading: false,
  items: [],
}

const books = (state = initialState, action: BooksActionTypes) => {

  switch(action.type) {
    case SET_BOOKS: {
      return {
        ...state,
        items: action.payload,
        isLoading: true
      }
    }

    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }

    default: 
      return state
  }
}

export default books