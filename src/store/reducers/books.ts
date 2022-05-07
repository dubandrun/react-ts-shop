import { SET_BOOKS, SET_IS_LOADING } from '../../constants'

import { BooksActionTypes, IBookData } from '../../types'

type StateItems = {
  isLoading: boolean,
  items: IBookData[]
}

const initialState: StateItems = {
  isLoading: false,
  items: [],
}

const books = (state = initialState, action: BooksActionTypes): StateItems => {
  switch(action.type) {
    case SET_BOOKS: {
      return {
        ...state,
        items: action.payload
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