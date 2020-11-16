import {
  SET_BOOKS,
  SET_IS_LOADING,
} from '../constants'

const initialState = {
  isLoading: false,
  items: null,
}

const books = (state = initialState, action) => {

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