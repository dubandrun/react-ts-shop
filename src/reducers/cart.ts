import {
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART
} from '../constants'

import { CartActionTypes, IAddBook } from '../types'

type stateItems = {
  items: IAddBook[]
}

const initialState: stateItems = {
  items: []
}

const cart = (state = initialState, action: CartActionTypes): stateItems  => {

  switch(action.type) {
    case ADD_BOOK_TO_CART: {
      return {
        ...state,
        items: [...state.items, action.payload]
        
      }
    }
    case REMOVE_BOOK_FROM_CART: {
      return {
        ...state,
        items: state.items.filter( (book: IAddBook) => book.id !== action.payload)
      }
    }
    default: 
      return state
  }
}

export default cart