import { ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART } from '../../constants'

import { CartActionTypes, IAddBook } from '../../types'

type StateItems = {
  items: IAddBook[]
}

const initialState: StateItems = {
  items: []
}

const cart = (state = initialState, action: CartActionTypes): StateItems => {
  switch (action.type) {
    case ADD_BOOK_TO_CART: {
      return {
        ...state,
        items: [...state.items, action.payload]

      }
    }
    case REMOVE_BOOK_FROM_CART: {
      return {
        ...state,
        items: state.items.filter((book: IAddBook) => book.id !== action.payload)
      }
    }
    default:
      return state
  }
}

export default cart
